import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { equipItem, swapEquippedItem, collectCard, unequipItem } from '../../store/slices/inventorySlice';
import { FaBox } from 'react-icons/fa';
import ConfirmationModal from '../UI/ConfirmationModal';

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
  const collectedItems = useSelector(state => state.inventory.collectedItems);
  const equippedItem = useSelector(state => state.inventory.equippedItem);
  const theme = useSelector(state => state.game.theme);
  const collected = collectedItems['card-box'];
  const [showSwapModal, setShowSwapModal] = useState(false);

  const handleCollect = () => {
    const newItem = {
      type: 'card-box',
      id: 'card-box',
      name: 'Card Box'
    };

    if (equippedItem?.type === 'card') {
      dispatch(collectCard({ cardId: equippedItem.id }));
      dispatch(unequipItem());
      dispatch(equipItem(newItem));
      return;
    }

    if (equippedItem) {
      setShowSwapModal(true);
    } else {
      dispatch(equipItem(newItem));
    }
  };

  const handleConfirmSwap = () => {
    dispatch(swapEquippedItem({
      type: 'card-box',
      id: 'card-box',
      name: 'Card Box'
    }));
    setShowSwapModal(false);
  };

  return (
    <CardBoxContainer>
      <CardBox 
        collected={collected} 
        onClick={handleCollect}
        theme={theme}
      >
        <FaBox />
      </CardBox>

      <ConfirmationModal
        show={showSwapModal}
        onConfirm={handleConfirmSwap}
        onCancel={() => setShowSwapModal(false)}
        itemName={equippedItem?.name || 'current item'}
        message={`Picking up the Card Box will return your ${equippedItem?.name || 'current item'} to its original location. Continue?`}
      />
    </CardBoxContainer>
  );
};

export default CollectableCardBox; 