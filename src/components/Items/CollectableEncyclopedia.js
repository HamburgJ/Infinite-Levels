import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import BaseCollectable from './BaseCollectable';
import { equipItem, unequipItem } from '../../store/slices/inventorySlice';
import { FaBook } from 'react-icons/fa';
import NumberEncyclopedia from './NumberEncyclopedia';
import { setModalOpen, setModalClose } from '../../store/slices/modalSlice';

const EncyclopediaContainer = styled.div`
  text-align: center;
  margin: 2rem 0;
`;

const Encyclopedia = styled.div`
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

export const CollectableEncyclopedia = ({ forceAvailable = false, isInventory = false, isStorage = false }) => {
  const dispatch = useDispatch();
  const equippedItem = useSelector(state => state.inventory.equippedItem);
  
  const itemConfig = {
    type: 'encyclopedia',
    id: 'encyclopedia-1',
    name: 'Number Encyclopedia'
  };

  const handleClick = (e) => {
    const isRightClick = e?.type === 'contextmenu';
    if (isRightClick) {
      e.preventDefault();
    }

    if (isInventory && !isRightClick) {
      dispatch(setModalOpen('encyclopedia'));
      return;
    }

    if (isInventory) {
      return;
    }

    if (equippedItem?.type === 'encyclopedia') {
      dispatch(unequipItem());
    } else if (equippedItem === null) {
      dispatch(equipItem({
        ...itemConfig,
        fromStorage: isStorage
      }));
    }
  };

  return (
    <>
      <BaseCollectable
        itemConfig={itemConfig}
      useBaseCollection={false}
      renderItem={({ collected }) => (
        <EncyclopediaContainer>
          <Encyclopedia 
            collected={collected && !forceAvailable && !isInventory}
            onClick={handleClick}
            onContextMenu={handleClick}
          >
            <FaBook />
          </Encyclopedia>
        </EncyclopediaContainer>
        )}
      />
    </>
  );
};

export default CollectableEncyclopedia; 