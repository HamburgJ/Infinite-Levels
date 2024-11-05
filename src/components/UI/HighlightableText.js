import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setCurrentLevel } from '../../store';

const TextContainer = styled.div`
  font-size: ${props => props.$inherit ? 'inherit' : '1rem'};
  line-height: ${props => props.$inherit ? 'inherit' : '1.5'};
  user-select: text;
  color: ${props => props.$inherit ? 'inherit' : 'inherit'};
  margin: 0;
  padding: 0;
`;

const HighlightedSpan = styled.span`
  background-color: ${props => props.$isHighlighted ? 'yellow' : 'transparent'};
  cursor: ${props => (props.$isHighlighted && props.$isClickable) ? 'pointer' : 'text'};
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  &:hover {
    background-color: ${props => props.$isHighlighted ? 'orange' : 'transparent'};
  }
`;

const levelDictionary = {
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5,
  'six': 6,
  'seven': 7,
  'eight': 8,
  'nine': 9,
  'ten': 10,
  'i': { real: 0, imag: 1 },
  'e': Math.E
};

const HighlightableText = ({ text, inherit = false }) => {
  const dispatch = useDispatch();
  const [highlightedText, setHighlightedText] = useState('');
  const [highlightedIndex, setHighlightedIndex] = useState(null);
  const previousHighlightedText = useRef(highlightedText);

  const handleMouseUp = () => {
    const selection = window.getSelection();
    const selectedText = selection.toString().trim().toLowerCase();
    const range = selection.getRangeAt(0);
    const startContainer = range.startContainer;
    
    // Get the actual text node and its offset
    const textContent = startContainer.textContent;
    const startOffset = range.startOffset;
    const endOffset = range.endOffset;

    // Check if the selection is either a single digit or a full number
    if (/^\d+$/.test(selectedText) || levelDictionary.hasOwnProperty(selectedText)) {
        setHighlightedText(selectedText);
        setHighlightedIndex({
            node: startContainer,
            start: startOffset,
            end: endOffset
        });
    } else {
        setHighlightedText('');
        setHighlightedIndex(null);
    }
  };

  const handleClick = (part, index) => {
    if (highlightedText !== previousHighlightedText.current) {
        return;
    }
    
    if (highlightedText) {
        // Handle both single digits and full numbers
        if (/^\d+$/.test(highlightedText)) {
            dispatch(setCurrentLevel(parseInt(highlightedText, 10)));
            setHighlightedText('');
            return;
        }
        
        if (levelDictionary.hasOwnProperty(highlightedText)) {
            dispatch(setCurrentLevel(levelDictionary[highlightedText]));
            setHighlightedText('');
        }
    }
  };

  const renderTextWithHighlight = (text) => {
    // Handle undefined or null text
    if (!text) return null;
    
    const parts = text.split(/(\s+)/);
    return parts.map((part, index) => {
        const isHighlighted = highlightedText && 
            highlightedIndex?.node === document.createTextNode(part) &&
            part.substring(highlightedIndex.start, highlightedIndex.end).toLowerCase() === highlightedText;
        const isClickable = isHighlighted && 
            (levelDictionary.hasOwnProperty(highlightedText) || /^\d+$/.test(highlightedText));
        
        return (
            <HighlightedSpan
                key={`part-${index}`}
                $isHighlighted={isHighlighted}
                $isClickable={isClickable}
                onMouseUp={handleMouseUp}
                onMouseDown={() => handleClick(part, index)}
            >
                {part}
            </HighlightedSpan>
        );
    });
  };

  // Update the ref whenever highlightedText changes
  useEffect(() => {
    previousHighlightedText.current = highlightedText;
  }, [highlightedText]);

  return (
    <TextContainer $inherit={inherit}>
      {renderTextWithHighlight(text)}
    </TextContainer>
  );
};

export default HighlightableText;