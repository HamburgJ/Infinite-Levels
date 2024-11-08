import React, { useState, useRef, useEffect, useId} from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentLevel, pickupText } from '../../store';
import { extractNumberFromText, isValidNumber } from '../../utils/numberText';

const TextContainer = styled.div`
  font-size: ${props => {
    switch (props.$size) {
      case 'small': return '0.875rem';
      case 'large': return '2rem';
      case 'xlarge': return '2.5rem';
      default: return '1rem';
    }
  }};
  line-height: 1.5;
  user-select: text;
  color: ${props => props.$color || 'inherit'};
  margin: 0;
  padding: 0;
  
  ${props => props.$enhanced && `
    font-family: 'Edu AU VIC WA NT Pre', cursive;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;
    -webkit-background-clip: text;
    letter-spacing: 1px;
    transform: translateZ(0);
  `}
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

const HighlightableText = ({ 
  text, 
  inherit = false,
  allowTextPickup = false,
  enhanced = false,
  sourceId,
  size,
  color
}) => {
  const dispatch = useDispatch();
  const inventoryState = useSelector(state => state.inventory);
  const heldText = useSelector(state => state.inventory?.heldText);
  const [highlightedText, setHighlightedText] = useState('');
  const containerRef = useRef(null);
  const id = useId();

  /*
  useEffect(() => {
    console.log('Inventory state changed:', {
      entireState: inventoryState,
      heldText
    });
  }, [inventoryState, heldText]);

  */
  const handleMouseUp = (e) => {
    if (e.button === 2 && allowTextPickup) {
      e.preventDefault();
      const selection = window.getSelection();
      const selectedText = selection.toString().trim();
      
      if (selectedText) {
        const textOffset = getTextOffset(selection.anchorNode, selection.anchorOffset);
        dispatch(pickupText({ 
          text: selectedText, 
          sourceId: id,
          index: textOffset,
          level: extractNumberFromText(selectedText)
        }));

        selection.removeAllRanges();
      }
    }
  };

  const shouldRenderText = (startIndex) => {
    if (!heldText.content) return true;

    return !(
      heldText.sourceId === id && 
      heldText.index === startIndex
    );
  };

  const getTextSegments = () => {
    if (!text) return [];
    
    if (!heldText?.content || heldText.sourceId !== id) {
      return [{ text, start: 0, end: text.length }];
    }

    const beforeText = text.slice(0, heldText.index);
    const afterText = text.slice(heldText.index + heldText.content.length);
    const newText = beforeText + afterText;
    return [{
      text: newText,
      start: 0,
      end: newText.length
    }];
  };

  const getTextOffset = (node, offset) => {
    let totalOffset = 0;
    const walker = document.createTreeWalker(
      containerRef.current,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );

    while (walker.nextNode()) {
      if (walker.currentNode === node) {
        return totalOffset + offset;
      }
      totalOffset += walker.currentNode.length;
    }
    return totalOffset + offset;
  };

  const handleMouseDown = (e) => {
    if (e.button === 2) return;

    const selection = window.getSelection();
    const selectedText = selection.toString().trim();
    console.log('HighlightableText: Selected text:', selectedText);
    if (selectedText.length === 0) {
      setHighlightedText('');
      return;
    }
    const numberValue = extractNumberFromText(selectedText);
    if (numberValue !== null) {
      setHighlightedText(selectedText.toLowerCase());
      console.log('HighlightableText: Extracted number value:', numberValue);
      if (numberValue !== null) {
        console.log('HighlightableText: Dispatching level change:', numberValue);
        dispatch(setCurrentLevel(numberValue));
      }
    } else {
      console.log('HighlightableText: Not a valid number');
      setHighlightedText('');
    }
  };

  const renderTextSegment = (segment) => {
    if (!shouldRenderText(segment.start)) {
      return null;
    }

    const parts = segment.text.split(/(\s+)/);
    return parts.map((part, index) => {
      const isHighlighted = part.toLowerCase() === highlightedText;
      const isClickable = isValidNumber(part);
      
      return (
        <HighlightedSpan
          key={`${segment.start}-${index}`}
          $isHighlighted={isHighlighted}
          $isClickable={isClickable}
        >
          {part}
        </HighlightedSpan>
      );
    });
  };

  return (
    <TextContainer 
      $inherit={inherit}
      $size={size}
      $color={color}
      $enhanced={enhanced}
      onMouseUp={handleMouseUp}
      onMouseDown={handleMouseDown}
      onContextMenu={e => e.preventDefault()}
      ref={containerRef}
      className="highlightable-text"
    >
      {getTextSegments().map((segment, index) => (
        <React.Fragment key={`segment-${segment.start}`}>
          {renderTextSegment(segment)}
        </React.Fragment>
      ))}
    </TextContainer>
  );
};

export default HighlightableText;