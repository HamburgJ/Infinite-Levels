import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import BaseCollectable from './BaseCollectable';
import { equipItem, unequipItem, pickupText, rightClickText } from '../../store/slices/inventorySlice';
import { setCurrentLevel } from '../../store/slices/gameSlice';

const TextButton = styled.button`
  // Reset button defaults
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  display: inline-block;

  // Text highlighting styles - using standard browser selection blue
  background-color: ${props => props.$isCollected ? 'transparent' : 'rgb(0, 96, 238)'};
  color: ${props => props.$isCollected ? 'inherit' : 'white'};
  transition: background-color 0.2s;
  line-height: 1;

  &:hover {
    background-color: ${props => props.$isCollected ? 'transparent' : 'rgb(0, 78, 194)'};
  }

  // Disable text selection
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  // Add white-space preservation
  white-space: pre;

  // Add transform for negative levels
  transform: ${props => props.$isNegative ? 'scaleX(-1)' : 'none'};
`;

const ButtonContainer = styled.div`
  text-align: center;
  margin: 2rem 0;
`;

export const CollectableText = ({ 
  sourceId,
  index,
  level,
  text,
  theme,
  isLevelNegative = false,
  forceAvailable = false, 
  isInventory = false, 
  isStorage = false 
}) => {
  const dispatch = useDispatch();
  const equippedItem = useSelector(state => state.inventory.equippedItem);

  const itemConfig = {
    type: 'text',
    sourceId,
    index,
    level,
    text,
    theme
  };
  console.log(itemConfig);

  const handleClick = (e) => {
    const isRightClick = e?.type === 'contextmenu';
    if (isRightClick) {
      e.preventDefault();
    }

    if (isStorage || isInventory) {
      if (isRightClick) {
        dispatch(rightClickText({
          textItem: itemConfig,
          fromStorage: true,
          fromInventory: false
        }));
      } else if (level !== null) {
        dispatch(setCurrentLevel(level));
      }
      return;
    }

    if (equippedItem?.type === 'text') {
      dispatch(unequipItem());
    } else if (equippedItem === null) {
      dispatch(equipItem({
        ...itemConfig,
        fromStorage: isStorage
      }));
    }
  };

  return (
    <BaseCollectable
      itemConfig={itemConfig}
      useBaseCollection={false}
      onBeforeCollect={(equippedItem, isRightClick) => {
        console.log('CollectableText onBeforeCollect:', {
          equippedItem,
          isRightClick,
          itemConfig
        });
      }}
      renderItem={({ collected }) => (
        <ButtonContainer>
          <TextButton
            $isCollected={collected && !forceAvailable && !isInventory}
            $isNegative={isLevelNegative}
            onClick={handleClick}
            onContextMenu={handleClick}
          >
            {text}
          </TextButton>
        </ButtonContainer>
      )}
    />
  );
};

export default CollectableText;