import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { equipItem, unequipItem, swapEquippedItem } from '../../store/slices/inventorySlice';
import { FaKey } from 'react-icons/fa';
import ConfirmationModal from '../UI/ConfirmationModal';

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
  pointer-events: ${props => props.collected ? 'none' : 'auto'};
  transition: transform 0.3s ease;

  &:hover {
    transform: ${props => props.collected ? 'none' : 'scale(1.1)'};
  }
`;

const CollectableKey = ({ keyId = 'key-1' }) => {
  const dispatch = useDispatch();
  const collectedItems = useSelector(state => state.inventory.collectedItems);
  const equippedItem = useSelector(state => state.inventory.equippedItem);
  const collected = collectedItems[keyId];
  const [showSwapModal, setShowSwapModal] = useState(false);

  const handleCollect = () => {
    const newItem = {
      type: 'key',
      id: keyId,
      name: 'Golden Key',
      icon: 'key'
    };

    if (equippedItem) {
      setShowSwapModal(true);
    } else {
      dispatch(equipItem(newItem));
    }
  };

  const handleConfirmSwap = () => {
    dispatch(swapEquippedItem({
      type: 'key',
      id: keyId,
      name: 'Golden Key',
      icon: 'key'
    }));
    setShowSwapModal(false);
  };

  return (
    <KeyContainer>
      <Key collected={collected} onClick={handleCollect}>
        <FaKey />
      </Key>

      <ConfirmationModal
        show={showSwapModal}
        onConfirm={handleConfirmSwap}
        onCancel={() => setShowSwapModal(false)}
        itemName={equippedItem?.name || 'current item'}
        message={`Picking up the Golden Key will return your ${equippedItem?.name || 'current item'} to its original location. Continue?`}
      />
    </KeyContainer>
  );
};

export default CollectableKey; 