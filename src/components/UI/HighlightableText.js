import React, { useState, useRef, useEffect, useId, useMemo, useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentLevel, pickupText, storeCharacterMap, removeCharacterMap } from '../../store';
import { extractNumberFromText, isValidNumber } from '../../utils/numberText';
import { hashString } from '../../utils/hash';
import { isNegative } from '../../utils/complex';

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

const mapVisibleToOriginalIndex = (visibleIndex, characterMap) => {
  if (!characterMap || !Array.isArray(characterMap)) {
    // If no character map exists, use identity mapping
    return visibleIndex;
  }

  let visibleCount = 0;
  for (let i = 0; i < characterMap.length; i++) {
    if (!characterMap[i].hidden) {
      if (visibleCount === visibleIndex) {
        return characterMap[i].originalIndex;
      }
      visibleCount++;
    }
  }
  return visibleIndex; // Fallback to identity mapping if index not found
};

const getCharacterMap = (sourceId, inventoryState) => {
  if (!sourceId || !inventoryState?.characterMaps) {
    // Return null to indicate identity mapping should be used
    return null;
  }
  return inventoryState.characterMaps[sourceId];
};

const HighlightableText = ({ 
  text, 
  inherit = false,
  allowTextPickup = true,
  enhanced = false,
  size,
  color
}) => {
  const dispatch = useDispatch();
  const containerRef = useRef(null);
  const [highlightedText, setHighlightedText] = useState('');
  const [selectionJustMade, setSelectionJustMade] = useState(false);
  
  const sourceId = useMemo(() => `text-${hashString(text)}`, [text]);
  const characterMap = useSelector(state => state.inventory.characterMaps?.[sourceId]);
  const inventoryState = useSelector(state => state.inventory);
  const currentLevel = useSelector(state => state.game.currentLevel);
  const inventory = useSelector(state => state.inventory);
  const isLevelNegative = isNegative(currentLevel);

  console.log(text, sourceId, inventory);
  const initialCharacterMap = useMemo(() => 
    text.split('').map((char, idx) => ({
      char,
      originalIndex: idx,
      hidden: false
    })), [text]
  );

  useEffect(() => {
    // Only create a new character map if one doesn't exist in Redux
    if (!characterMap) {
      const newMap = text.split('').map((char, idx) => ({
        char,
        originalIndex: idx,
        hidden: false
      }));
      dispatch(storeCharacterMap({ sourceId, characters: newMap }));
    }
  }, [sourceId, text, characterMap, dispatch]);

  const handleMouseDown = useCallback((e) => {
    if (!allowTextPickup) return;
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      if (range.collapsed) {
        setSelectionJustMade(false);
      }
    }
  }, [allowTextPickup]);

  const renderText = useMemo(() => {
    if (!characterMap) return text;

    const visibleText = characterMap
      .filter(char => !char.hidden)
      .map(char => char.char)
      .join('');

    return visibleText.split(/(\s+)/).map((part, idx) => {
      const isHighlighted = part.toLowerCase() === highlightedText;
      const isClickable = isValidNumber(part);
      
      return (
        <HighlightedSpan
          key={`${sourceId}-${idx}`}
          $isHighlighted={isHighlighted}
          $isClickable={isClickable}
        >
          {part}
        </HighlightedSpan>
      );
    });
  }, [characterMap, text, highlightedText, sourceId]);

  const handleMouseUp = (e) => {
    if (!allowTextPickup) return;
    
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    if (!range) return;

    // If text was just selected (range not collapsed), prevent this mouseup and set flag
    if (!range.collapsed && !selectionJustMade) {
      e.preventDefault();
      e.stopPropagation();
      setSelectionJustMade(true);
      return;
    }

    // Reset flag if no text is selected
    if (range.collapsed) {
      setSelectionJustMade(false);
    }

    let selectedText = range.toString();
    let level = extractNumberFromText(selectedText);
    
    // If level is negative, try processing reversed text
    if (isNegative(currentLevel)) {
      const reversedText = selectedText.split('').reverse().join('');
      console.log('selectedText', selectedText);
      console.log('reversedText', reversedText);
      const reversedLevel = extractNumberFromText(reversedText);
      console.log('reversedLevel', reversedLevel);
      if (reversedLevel) {
        level = reversedLevel;
      }
    }

    if (!level) return;

    //if left click, go to level
    if (e.button === 0) {
      console.log('going to level', level);
      dispatch(setCurrentLevel(level));
      return;
    }

    // Get start and end offsets relative to the container
    const containerRange = document.createRange();
    containerRange.selectNodeContents(containerRef.current);
    containerRange.setEnd(range.startContainer, range.startOffset);
    const startIndex = containerRange.toString().length;
    const endIndex = startIndex + selectedText.length;

    // Get all character indices in the selected range
    const characterIndices = [];
    for (let i = startIndex; i < endIndex; i++) {
      const visibleIndex = i;
      const originalIndex = mapVisibleToOriginalIndex(visibleIndex, characterMap);
      characterIndices.push(originalIndex);
    }

    // Only dispatch if we found valid indices
    if (characterIndices.length > 0) {
      dispatch(pickupText({
        type: 'text',
        text: selectedText,
        sourceId,
        characterIndices,
        level,
        isLevelNegative,
        enhanced
      }));
    }

    //unselect text
    selection.removeAllRanges();
  };

  // Use stored map or fall back to identity map
  const effectiveMap = characterMap || initialCharacterMap;

  return (
    <TextContainer 
      $inherit={inherit}
      $size={size}
      $color={color}
      $enhanced={enhanced}
      onMouseUp={(e)=>handleMouseUp(e)}
      onMouseDown={handleMouseDown}
      onContextMenu={e => e.preventDefault()}
      ref={containerRef}
    >
      {renderText}
    </TextContainer>
  );
};

export default HighlightableText;