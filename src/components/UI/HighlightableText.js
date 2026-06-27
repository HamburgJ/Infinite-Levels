import React, { useRef, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentLevel, pickupText, storeCharacterMap, addAchievement } from '../../store';
import { extractNumberFromText } from '../../utils/numberText';
import { hashString } from '../../utils/hash';
import { isNegative } from '../../utils/complex';
import { fonts, fontSizes } from '../../styles/theme';

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
  background-color: ${props => props.$isInteractive ? 'rgba(255, 235, 59, 0.35)' : 'transparent'};
  border-radius: ${props => props.$isInteractive ? '3px' : 0};
  cursor: ${props => props.$isInteractive ? 'text' : 'text'};
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  transition: background-color 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    background-color: ${props => props.$isInteractive ? 'rgba(255, 193, 7, 0.55)' : 'transparent'};
    box-shadow: ${props => props.$isInteractive ? '0 0 0 1px rgba(255, 193, 7, 0.35)' : 'none'};
  }
`;

const obviousNumberWords = new Set([
  'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
  'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
  'seventeen', 'eighteen', 'nineteen', 'twenty', 'thirty', 'forty', 'fifty',
  'sixty', 'seventy', 'eighty', 'ninety', 'hundred', 'thousand', 'million',
  'billion', 'trillion', 'googol', 'centillion', 'millinillion', 'infinity'
]);

const isObviousNumberToken = (part) => {
  const normalized = part
    .trim()
    .toLowerCase()
    .replace(/^[^a-z0-9+.-]+|[^a-z0-9i]+$/g, '');

  if (!normalized) return false;
  if (/^[+-]?(\d+(\.\d+)?|\.\d+)(i)?$/.test(normalized)) return true;
  if (/^[+-]?(\d+)?([+-]\d*)i$/.test(normalized)) return true;
  return obviousNumberWords.has(normalized);
};

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
  const currentLevel = useSelector(state => state.game.currentLevel);
  const isLevelNegative = isNegative(currentLevel);

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

  const renderText = useMemo(() => {
    if (!characterMap) return text;

    const visibleText = characterMap
      .filter(char => !char.hidden)
      .map(char => char.char)
      .join('');

    return visibleText.split(/(\s+)/).map((part, idx) => {
      const trimmedPart = part.trim();
      const isInteractive = allowTextPickup && isObviousNumberToken(trimmedPart);

      return (
        <HighlightedSpan
          key={`${sourceId}-${idx}`}
          $isInteractive={isInteractive}
        >
          {part}
        </HighlightedSpan>
      );
    });
  }, [allowTextPickup, characterMap, text, sourceId]);

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

  return (
    <TextContainer 
      $inherit={inherit}
      $size={size}
      $color={color}
      $enhanced={enhanced}
      onMouseUp={(e)=>handleMouseUp(e)}
      onContextMenu={e => e.preventDefault()}
      ref={containerRef}
    >
      {renderText}
    </TextContainer>
  );
};

export default HighlightableText;
