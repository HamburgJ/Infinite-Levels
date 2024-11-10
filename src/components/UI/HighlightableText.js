import React, { useState, useRef, useEffect, useId} from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentLevel, pickupText, storeCharacterMap, removeCharacterMap, updateCharacterMap } from '../../store';
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

const getAllStoredTexts = (inventoryState, sourceId) => {
  // Initialize map with all characters
  const allTexts = new Map();
  
  // Helper to add a character to the map
  const addCharacter = (char, index, isHidden = false) => {
    const key = `${index}-${char}`;
    allTexts.set(key, {
      char,
      index,
      isHidden,
      sourceId
    });
  };

  // First add all characters as visible
  const characterMap = inventoryState.characterMaps?.[sourceId] || [];
  characterMap.forEach((charData) => {
    addCharacter(charData.char, charData.index, false);
  });

  // Then mark characters as hidden based on stored texts
  const storedTextItems = [
    ...(inventoryState.bookshelf || []).filter(Boolean),
    inventoryState.equippedItem
  ].filter(item => item?.sourceId === sourceId);

  storedTextItems.forEach(item => {
    if (item?.type === 'text') {
      for (let i = 0; i < item.length; i++) {
        const index = item.index + i;
        const key = `${index}-${characterMap[index]?.char}`;
        if (allTexts.has(key)) {
          allTexts.get(key).isHidden = true;
        }
      }
    }
  });

  return allTexts;
};

const findOverlappingSegments = (segments, textItem) => {
  return segments.filter(segment => {
    // Check if this segment overlaps with the text item
    const segmentEnd = segment.start + segment.text.length;
    const itemEnd = textItem.index + textItem.text.length;
    
    // Consider a segment overlapping if it intersects with the text item's range
    const isOverlapping = !(segmentEnd <= textItem.index || segment.start >= itemEnd);
    return isOverlapping;
  });
};

const splitSegment = (segment, textItem) => {
  const result = [];
  const segmentEnd = segment.start + segment.text.length;
  const itemEnd = textItem.index + textItem.text.length;

  // Calculate relative positions within the segment
  const relativeStart = Math.max(0, textItem.index - segment.start);
  const relativeEnd = Math.min(segment.text.length, itemEnd - segment.start);

  // Add segment before the split
  if (relativeStart > 0) {
    result.push({
      text: segment.text.slice(0, relativeStart),
      start: segment.start,
      end: segment.start + relativeStart
    });
  }

  // Add segment after the split
  if (relativeEnd < segment.text.length) {
    result.push({
      text: segment.text.slice(relativeEnd),
      start: segment.start + relativeEnd,
      end: segmentEnd
    });
  }

  return result;
};

const mapVisibleIndexToOriginal = (visibleIndex, segments) => {
  let currentVisibleIndex = 0;
  
  for (const segment of segments) {
    const segmentLength = segment.text.length;
    
    // If the visible index falls within this segment
    if (currentVisibleIndex <= visibleIndex && 
        visibleIndex < currentVisibleIndex + segmentLength) {
      // Calculate the offset within this segment
      const segmentOffset = visibleIndex - currentVisibleIndex;
      // Map it back to the original text position
      return segment.start + segmentOffset;
    }
    
    currentVisibleIndex += segmentLength;
  }
  
  return -1; // Index not found
};

const reindexSegments = (segments, removedSegment) => {
  // Sort segments by start position
  segments.sort((a, b) => a.start - b.start);
  
  let newSegments = [];
  let offset = 0;

  segments.forEach(segment => {
    // Calculate new positions
    const newStart = segment.start - offset;
    const newEnd = segment.end - offset;

    // If this segment starts after the removed segment
    if (segment.start >= removedSegment.start + removedSegment.text.length) {
      offset += removedSegment.text.length;
    }
    // If segments overlap
    else if (segment.end > removedSegment.start) {
      // Only adjust offset for the overlapping portion
      const overlapStart = Math.max(segment.start, removedSegment.start);
      const overlapEnd = Math.min(segment.end, removedSegment.start + removedSegment.text.length);
      offset += overlapEnd - overlapStart;
    }

    if (segment.text.length > 0) {
      newSegments.push({
        ...segment,
        start: newStart,
        end: newEnd,
        originalStart: segment.start // Keep original position for reference
      });
    }
  });

  return newSegments;
};

const getOriginalPositions = (storedTexts, originalOffset, selectedText) => {
  // start with base case - no stored texts. original positions is just the text's original position in the text!
  if (storedTexts.length === 0) {
    return [{
      text: selectedText,
      index: originalOffset,
      length: selectedText.length
    }];
  }
};

const createCharacterMap = (text) => {
  return text.split('').map((char, index) => ({
    char,
    index,
    originalIndex: index
  }));
};

const HighlightableText = ({ 
  text, 
  inherit = false,
  allowTextPickup = false,
  enhanced = false,
  size,
  color
}) => {
  const dispatch = useDispatch();
  const sourceId = useId();
  const containerRef = useRef(null);
  const [highlightedText, setHighlightedText] = useState('');
  const characterMap = useSelector(state => state.inventory.characterMaps[sourceId]);
  const inventoryState = useSelector(state => state.inventory);

  // log the character map
  if (!text.includes('Demo')) {
    console.log('characterMap', characterMap);
    console.log('inventoryState', {bookshelf: inventoryState.bookshelf, equippedItem: inventoryState.equippedItem, characterMaps: inventoryState.characterMaps});
  }

  // Initialize character map on mount
  useEffect(() => {
    if (text && !characterMap) {
      const initialMap = text.split('').map((char, idx) => ({
        char,
        originalIndex: idx,
        hidden: false
      }));
      dispatch(storeCharacterMap({ sourceId, characters: initialMap }));
    }
    return () => dispatch(removeCharacterMap({ sourceId }));
  }, [text, sourceId, dispatch]);

  // Get text offset relative to container
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
    if (e.button === 2) return; // Ignore right clicks
    setHighlightedText(''); // Clear any existing highlight
  };

  // Add this helper function to map visible index to original index
  const mapVisibleToOriginalIndex = (visibleIndex) => {
    let visibleCount = 0;
    let originalIndex = 0;
    
    while (visibleCount <= visibleIndex && originalIndex < characterMap.length) {
      if (!characterMap[originalIndex].hidden) {
        if (visibleCount === visibleIndex) {
          return originalIndex;
        }
        visibleCount++;
      }
      originalIndex++;
    }
    return -1;
  };

  const handleMouseUp = (e) => {
    if (e.button === 2 && allowTextPickup) {
      e.preventDefault();
      const selection = window.getSelection();
      const selectedText = selection.toString();
      
      if (selectedText) {
        const range = selection.getRangeAt(0);
        const visibleStartOffset = getTextOffset(range.startContainer, range.startOffset);
        
        const level = extractNumberFromText(selectedText);
        if (!level) return;

        // Map visible indices to original indices
        const selectedIndices = [];
        for (let i = 0; i < selectedText.length; i++) {
          const originalIndex = mapVisibleToOriginalIndex(visibleStartOffset + i);
          if (originalIndex !== -1) {
            selectedIndices.push(originalIndex);
          }
        }

        // Only dispatch if we found valid indices
        if (selectedIndices.length > 0) {
          dispatch(pickupText({
            type: 'text',
            text: selectedText,
            sourceId,
            characterIndices: selectedIndices,
            level
          }));
        }

        selection.removeAllRanges();
      }
    }
  };

  const renderText = () => {
    if (!characterMap) return text;

    // Create visible text by filtering hidden characters
    const visibleText = characterMap
      .filter(char => !char.hidden)
      .map(char => char.char)
      .join('');

    // Split by spaces to maintain word boundaries for highlighting
    return visibleText.split(/(\s+)/).map((part, idx) => {
      const isHighlighted = part.toLowerCase() === highlightedText;
      const isClickable = isValidNumber(part);
      
      return (
        <HighlightedSpan
          key={idx}
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
    >
      {renderText()}
    </TextContainer>
  );
};

export default HighlightableText;