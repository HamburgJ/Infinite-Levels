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
  const numberEntryEnabled = useSelector(state => state.game.discoveredMechanics.numberEntry);
  const [highlightedText, setHighlightedText] = useState('');
  const containerRef = useRef(null);
  const id = useId();
  const equippedItem = useSelector(state => state.inventory.equippedItem);

  const isEquipped = (item) => {
    return equippedItem?.type === 'text' && equippedItem?.sourceId === item.sourceId && equippedItem?.index === item.index;
  };
  console.log('equippedItem', equippedItem);
  console.log('isEquipped', isEquipped(heldText));

  const handleMouseDown = (e) => {
    if (e.button === 2) return;

    if (!numberEntryEnabled) return;

    const selection = window.getSelection();
    const selectedText = selection.toString().trim();
    
    if (selectedText.length === 0) {
      setHighlightedText('');
      return;
    }
    
    const numberValue = extractNumberFromText(selectedText);
    if (numberValue !== null) {
      setHighlightedText(selectedText.toLowerCase());
      dispatch(setCurrentLevel(numberValue));
    } else {
      setHighlightedText('');
    }
  };

  const handleMouseUp = (e) => {
    if (e.button === 2 && allowTextPickup) {
      e.preventDefault();
      const selection = window.getSelection();
      const selectedText = selection.toString();
      
      if (selectedText) {
        const textOffset = getTextOffset(selection.anchorNode, selection.anchorOffset);
        const level = extractNumberFromText(selectedText);
        if (!level) return;

        dispatch(pickupText({ 
          type: 'text',
          text: selectedText,  // Keep exact selection
          sourceId: id,
          index: textOffset,
          length: selectedText.length,
          level,
          theme: null
        }));

        selection.removeAllRanges();
      }
    }
  };

  const shouldRenderText = (startIndex, length) => {
    if (!heldText?.sourceId) return true;

    return !(
      heldText.sourceId === id && 
      startIndex >= heldText.index && 
      startIndex < (heldText.index + (heldText.length || heldText.text.length))
    );
  };

  const getTextSegments = () => {
    if (!text) return [];
    
    if (!heldText?.sourceId || heldText.sourceId !== id) {
      return [{ text, start: 0, end: text.length }];
    }

    const beforeText = text.slice(0, heldText.index);
    const afterText = text.slice(heldText.index + heldText.length);
    
    const segments = [
      { text: beforeText, start: 0, end: beforeText.length },
      { text: afterText, start: heldText.index + heldText.length, end: text.length }
    ].filter(segment => segment.text.length > 0);

    return segments;
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

  const renderTextSegment = (segment) => {

    if (!shouldRenderText(segment.start, segment.length)) {
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