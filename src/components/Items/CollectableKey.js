import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import BaseCollectable from './BaseCollectable';
import { equipItem, unequipItem } from '../../store/slices/inventorySlice';
import { FaKey } from 'react-icons/fa';

const KeyContainer = styled.div`
  text-align: center;
  margin: 2rem 0;
`;

const Key = styled.div`
  display: inline-block;
  cursor: pointer;
  font-size: 2rem;
  color: gold;
  opacity: ${props => props.collected ? 0.5 : 1};
  transition: transform 0.3s ease;

  &:hover {
    transform: ${props => props.collected ? 'none' : 'scale(1.1)'};
  }
`;

export const CollectableKey = ({ forceAvailable = false, isInventory = false, isStorage = false }) => {
  const dispatch = useDispatch();
  const equippedItem = useSelector(state => state.inventory.equippedItem);

  const itemConfig = {
    type: 'key',
    id: 'key',
    name: 'Key'
  };

  const handleClick = (e) => {
    const isRightClick = e?.type === 'contextmenu';
    if (isRightClick) {
      e.preventDefault();
    }

    if (isInventory) {
      return;
    }

    if (equippedItem?.type === 'key') {
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
        <KeyContainer>
          <Key 
            collected={collected && !forceAvailable && !isInventory}
            onClick={handleClick}
            onContextMenu={handleClick}
          >
            <FaKey />
          </Key>
        </KeyContainer>
      )}
    />
  );
};

export default CollectableKey;