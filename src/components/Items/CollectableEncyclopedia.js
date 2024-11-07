import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { equipItem, swapEquippedItem } from '../../store/slices/inventorySlice';
import { FaBook } from 'react-icons/fa';
import ConfirmationModal from '../UI/ConfirmationModal';

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
  pointer-events: ${props => props.collected ? 'none' : 'auto'};
  transition: transform 0.3s ease;

  &:hover {
    transform: ${props => props.collected ? 'none' : 'scale(1.1)'};
  }
`;

const CollectableEncyclopedia = () => {
  const dispatch = useDispatch();
  const collectedItems = useSelector(state => state.inventory.collectedItems);
  const equippedItem = useSelector(state => state.inventory.equippedItem);
  const theme = useSelector(state => state.game.theme);
  const collected = collectedItems['encyclopedia-1'];
  const [showSwapModal, setShowSwapModal] = useState(false);

  const handleCollect = () => {
    const newItem = {
      type: 'encyclopedia',
      id: 'encyclopedia-1',
      name: 'Number Encyclopedia'
    };

    if (equippedItem) {
      setShowSwapModal(true);
    } else {
      dispatch(equipItem(newItem));
    }
  };

  const handleConfirmSwap = () => {
    dispatch(swapEquippedItem({
      type: 'encyclopedia',
      id: 'encyclopedia-1',
      name: 'Number Encyclopedia'
    }));
    setShowSwapModal(false);
  };

  return (
    <EncyclopediaContainer>
      <Encyclopedia 
        collected={collected} 
        onClick={handleCollect}
        theme={theme}
      >
        <FaBook />
      </Encyclopedia>

      <ConfirmationModal
        show={showSwapModal}
        onConfirm={handleConfirmSwap}
        onCancel={() => setShowSwapModal(false)}
        itemName={equippedItem?.name || 'current item'}
        message={`Picking up the Encyclopedia will return your ${equippedItem?.name || 'current item'} to its original location. Continue?`}
      />
    </EncyclopediaContainer>
  );
};

export default CollectableEncyclopedia; 