import React, { useMemo } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import BaseCollectable from './BaseCollectable';
import { equipItem, unequipItem, rightClickLevelButton, leftClickLevelButton } from '../../store/slices/inventorySlice';
import { FakeCollectableLevelButton } from '../UI/SharedStyles';
import { setCurrentLevel } from '../../store/slices/gameSlice';

const ButtonContainer = styled.div`
  text-align: center;
  margin: 2rem 0;
`;

export const CollectableLevelButton = ({ 
  value,
  variant = 'outline-primary',
  displayText,
  id: providedId,
  name,
  forceAvailable = false, 
  isInventory = false, 
  isStorage = false,
  isDigitalScreen = false
}) => {
  const dispatch = useDispatch();
  const equippedItem = useSelector(state => state.inventory.equippedItem);

  const componentId = useMemo(() => 
    providedId || `level-button-${value}-${displayText?.replace(/\s+/g, '-')}`,
    [providedId, value, displayText]
  );

  const itemConfig = useMemo(() => ({
    type: 'levelButton',
    value,
    variant,
    displayText,
    id: componentId,
    name,
    isDigitalScreen
  }), [value, variant, displayText, componentId, name, isDigitalScreen]);

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
          buttonItem: { ...itemConfig, isDigitalScreen },
          fromStorage: true,
          fromInventory: false
        }));    
      } else {
        console.log('value', value);
        dispatch(setCurrentLevel(value.real === 'Infinity' ? 'Infinity' : value));
      }
      return;
    }

    if (equippedItem?.type === 'levelButton') {
      dispatch(unequipItem());
    } else if (equippedItem === null) {
      dispatch(equipItem({
        ...itemConfig,
        isDigitalScreen,
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
          <FakeCollectableLevelButton
            variant={variant}
            isCollected={collected && !forceAvailable && !isInventory}
            disabled={false}
            onClick={handleClick}
            onContextMenu={handleClick}
            $isDigitalScreen={isDigitalScreen}
          >
            {displayText}
          </FakeCollectableLevelButton>
        </ButtonContainer>
      )}
    />
  );
};

export default CollectableLevelButton;