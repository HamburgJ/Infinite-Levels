import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import BaseCollectable from './BaseCollectable';
import { equipItem, unequipItem } from '../../store/slices/inventorySlice';
import { useAchievements } from "../../hooks/useAchievements"

const BlackHoleContainer = styled.div`
  text-align: center;
  margin: 2rem 0;
`;

const BlackHoleItem = styled.div`
  display: inline-block;
  cursor: pointer;
  font-size: 2rem;
  opacity: ${props => props.collected ? 0.5 : 1};
  transition: transform 0.3s ease;

  &:hover {
    transform: ${props => props.collected ? 'none' : 'scale(1.1)'};
  }
`;

export const CollectableBlackHole = ({ forceAvailable = false, isInventory = false, isStorage = false }) => {
  const dispatch = useDispatch();
  const equippedItem = useSelector(state => state.inventory.equippedItem);
  const { unlockAchievement } = useAchievements();
  const itemConfig = {
    type: 'black-hole',
    id: 'black-hole',
    name: 'Black Hole'
  };

  const handleClick = (e) => {
    const isRightClick = e?.type === 'contextmenu';
    if (isRightClick) {
      e.preventDefault();
      unlockAchievement('BLACK_HOLE_FOUND');
    }

    if (isInventory) {
      return;
    }

    if (equippedItem?.type === 'black-hole') {
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
        <BlackHoleContainer>
          <BlackHoleItem 
            collected={collected && !forceAvailable && !isInventory}
            onClick={handleClick}
            onContextMenu={handleClick}
          >
            ⚫
          </BlackHoleItem>
        </BlackHoleContainer>
      )}
    />
  );
};

export default CollectableBlackHole;
