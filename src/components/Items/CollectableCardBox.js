import React from 'react';
import styled from 'styled-components';
import { FaBox } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { unequipItem, equipItem } from '../../store/slices/inventorySlice';
import BaseCollectable from './BaseCollectable';

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
  pointer-events: ${props => props.collected ? 'none' : 'auto'};
  transition: transform 0.3s ease;

  &:hover {
    transform: ${props => props.collected ? 'none' : 'scale(1.1)'};
  }
`;

const CollectableCardBox = () => {
  const dispatch = useDispatch();
  const equippedItem = useSelector(state => state.inventory.equippedItem);
  
  const itemConfig = {
    type: 'card-box',
    id: 'card-box',
    name: 'Card Box',
    collectedCards: {}
  };

  const handleBeforeCollect = (equippedItem) => {
    if (equippedItem?.type === 'card') {
      // Add card to box and equip box
      const boxWithCard = {
        ...itemConfig,
        collectedCards: { [equippedItem.id]: true }
      };
      dispatch(equipItem(boxWithCard));
      return false; // Don't continue with normal collection
    }
    return true; // Continue with normal collection
  };

  return (
    <BaseCollectable
      itemConfig={itemConfig}
      onBeforeCollect={handleBeforeCollect}
      renderItem={({ collected, handleCollect }) => (
        <CardBoxContainer>
          <CardBox collected={collected} onClick={handleCollect}>
            <FaBox />
          </CardBox>
        </CardBoxContainer>
      )}
    />
  );
};

export default CollectableCardBox; 