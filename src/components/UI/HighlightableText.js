import React, { useRef, useEffect, useId, useMemo, useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentLevel, pickupText, storeCharacterMap, removeCharacterMap, addAchievement } from '../../store';
import { extractNumberFromText, isValidNumber } from '../../utils/numberText';
import { hashString } from '../../utils/hash';
import { isNegative } from '../../utils/complex';
import { colors, fonts, fontSizes, transitions } from '../../styles/theme';

const TextContainer = styled.div`
  font-size: ${props => {
    switch (props.$size) {
      case 'small': return fontSizes.sm;
      case 'medium': return fontSizes.lg;
      case 'large': return fontSizes.xl;
      case 'xlarge': return fontSizes['2xl'];
      default: return fontSizes.base;
    }
  }};
  line-height: 1.6;
  user-select: text;
  color: ${props => props.$color || 'inherit'};
  margin: 0;
  padding: 0;
  
  ${props => props.$enhanced && `
    font-family: ${fonts.display};
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;
    -webkit-background-clip: text;
    letter-spacing: 1px;
    transform: translateZ(0);
  `}
`;

const HighlightedSpan = styled.span`
  background-color: transparent;
  cursor: ${props => props.$isClickable ? 'cell' : 'text'};
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  border-radius: 2px;
  transition:
    background-color ${transitions.fast},
    border-color ${transitions.fast};
  
  ${props => props.$isClickable && `
    background-color: ${colors.primarySubtle};
    border-bottom: 1px dotted rgba(37, 99, 235, 0.25);
    
    &:hover {
      background-color: rgba(37, 99, 235, 0.12);
      border-bottom: 1px solid ${colors.primary};
    }
  `}
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
  color,
  achievement = null,
  onLevelChange = null
}) => {
  const dispatch = useDispatch();
  const containerRef = useRef(null);
  
  const sourceId = useMemo(() => `text-${hashString(text)}`, [text]);
  const characterMap = useSelector(state => state.inventory.characterMaps?.[sourceId]);
  const inventoryState = useSelector(state => state.inventory);
  const currentLevel = useSelector(state => state.game.currentLevel);
  const inventory = useSelector(state => state.inventory);
  const isLevelNegative = isNegative(currentLevel);

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
    // No-op, kept for event binding
  }, []);

  const renderText = useMemo(() => {
    if (!characterMap) return text;

    const visibleText = characterMap
      .filter(char => !char.hidden)
      .map(char => char.char)
      .join('');

    return visibleText.split(/(\s+)/).map((part, idx) => {
      // Strip punctuation for validation but display original text
      const cleanPart = part.replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, '');
      const isClickable = cleanPart.length > 0 && isValidNumber(cleanPart);
      
      return (
        <HighlightedSpan
          key={`${sourceId}-${idx}`}
          $isClickable={isClickable}
        >
          {part}
        </HighlightedSpan>
      );
    });
  }, [characterMap, text, sourceId]);

  const handleMouseUp = (e) => {
    if (!allowTextPickup) return;
    
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    if (!range || range.collapsed) return;

    let selectedText = range.toString();
    let result = extractNumberFromText(selectedText);
    
    // If level is negative, try processing reversed text
    if (isNegative(currentLevel)) {
      const reversedText = selectedText.split('').reverse().join('');
      const reversedResult = extractNumberFromText(reversedText);
      if (reversedResult) {
        result = reversedResult;
      }
    }

    if (!result) return;

    // if left click, go to level and dispatch achievements
    if (e.button === 0) {
      dispatch(setCurrentLevel(result.value));
      if (result.achievement) {
        dispatch(addAchievement(result.achievement));
      }
      if (achievement) {
        dispatch(addAchievement(achievement));
      }
      if (onLevelChange) {
        onLevelChange();
      }
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
      // Dispatch text pickup
      dispatch(pickupText({
        type: 'text',
        text: selectedText,
        sourceId,
        characterIndices,
        level: result.value,
        achievement: achievement || result.achievement,
        isLevelNegative,
        enhanced
      }));

      // Add achievement dispatches for collection too
      if (result.achievement) {
        dispatch(addAchievement(result.achievement));
      }
      if (achievement) {
        dispatch(addAchievement(achievement));
      }
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