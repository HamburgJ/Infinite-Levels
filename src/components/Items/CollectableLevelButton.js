import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import BaseCollectable from './BaseCollectable';
import { equipItem, unequipItem, rightClickLevelButton, leftClickLevelButton } from '../../store/slices/inventorySlice';
import { CollectibleLevelButton } from '../UI/SharedStyles';
import { setCurrentLevel } from '../../store/slices/gameSlice';


const ButtonContainer = styled.div`
  text-align: center;
  margin: 2rem 0;
`;

export const CollectableLevelButton = ({ 
  value,
  variant = 'outline-primary',
  displayText,
  id,
  name,
  forceAvailable = false, 
  isInventory = false, 
  isStorage = false 
}) => {
  const dispatch = useDispatch();
  const equippedItem = useSelector(state => state.inventory.equippedItem);

  const itemConfig = {
    type: 'levelButton',
    value,
    variant,
    displayText,
    id,
    name
  };

  const handleClick = (e) => {
    const isRightClick = e?.type === 'contextmenu';
    if (isRightClick) {
      e.preventDefault();
    }

    if (isInventory) {
      return;
    }

    if (isStorage) {
      if (isRightClick) {
        dispatch(rightClickLevelButton({
          buttonItem: itemConfig,
          fromStorage: true,
          fromInventory: false
        }));    
      } else {
        dispatch(setCurrentLevel(value));
      }
      return;
    }

    if (equippedItem?.type === 'levelButton') {
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
      renderItem={({ collected }) => (
        <ButtonContainer>
          <CollectibleLevelButton
            variant={variant}
            isCollected={collected && !forceAvailable && !isInventory}
            disabled={false}
            onClick={handleClick}
            onContextMenu={handleClick}
          >
            {displayText}
          </CollectibleLevelButton>
        </ButtonContainer>
      )}
    />
  );
};

export default CollectableLevelButton;