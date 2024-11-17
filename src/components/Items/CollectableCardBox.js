import React from 'react';
import styled from 'styled-components';
import { FaBox } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { unequipItem, equipItem, addCardToBox, addToCardBox, removeFromCardBox, dropItem } from '../../store/slices/inventorySlice';
import BaseCollectable from './BaseCollectable';
import { useAchievements } from '../../hooks/useAchievements';

const CardBoxContainer = styled.div`
  text-align: center;
  margin: 2rem 0;
`;

const CardBox = styled.div`
  display: inline-block;
  cursor: pointer;
  font-size: 2rem;
  color: ${props => props.theme === 'dark' ? '#fff' : '#000'};
  opacity: ${props => props.collected ? 0.5 : 1};
  transition: transform 0.3s ease;

  &:hover {
    transform: ${props => props.collected ? 'none' : 'scale(1.1)'};
  }
`;

const CollectableCardBox = ({ forceAvailable = false, isInventory = false, isStorage = false }) => {
  const dispatch = useDispatch();
  const { unlockAchievement } = useAchievements();
  const equippedItem = useSelector(state => state.inventory.equippedItem);

  const itemConfig = {
    type: 'card-box',
    id: 'card-box-1',
    name: 'Card Box'
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
      if (equippedItem?.type === 'card') {
        dispatch(addToCardBox({ 
          cardId: equippedItem.collectableCardId
        }));
        unlockAchievement('FIRST_CARD_STORED');
      }
      dispatch(equipItem({
        ...itemConfig,
        fromStorage: true
      }));
      return;
    }

    if (equippedItem?.type === 'card') {
      dispatch(addToCardBox({ 
        cardId: equippedItem.collectableCardId
      }));
      unlockAchievement('FIRST_CARD_STORED');
      dispatch(equipItem({
        ...itemConfig,
        fromStorage: isStorage
      }));
      unlockAchievement('CARD_BOX_FOUND');
    } else if (equippedItem?.type === 'card-box') {
      dispatch(unequipItem());
    } else if (equippedItem === null) {
      dispatch(equipItem({
        ...itemConfig,
        fromStorage: isStorage
      }));
      unlockAchievement('CARD_BOX_FOUND');
    }
  };

  return (
    <BaseCollectable
      itemConfig={itemConfig}
      isButton={false}
      renderItem={({ collected }) => (
        <CardBoxContainer>
          <CardBox 
            collected={forceAvailable ? false : collected}
            onClick={handleClick}
            onContextMenu={handleClick}
          >
            <FaBox />
          </CardBox>
        </CardBoxContainer>
      )}
    />
  );
};

export default CollectableCardBox; 