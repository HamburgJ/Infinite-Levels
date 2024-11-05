import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentLevel } from '../../store';
import { unequipItem } from '../../store/slices/inventorySlice';
import { CollectibleLevelButton } from './SharedStyles';
import WalletItem from '../Items/WalletItem';
import { FaTimes } from 'react-icons/fa';
import ConfirmationModal from './ConfirmationModal';
import WalletModal from './WalletModal';

const InventoryContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.2));
`;

const ItemSlot = styled.div`
  width: 70px;
  height: 70px;
  background: rgba(255, 255, 255, 0.95);
  border: 3px solid rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${props => props.hasItem ? 'pointer' : 'default'};
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    border-color: rgba(0, 0, 0, 0.3);
    transform: ${props => props.hasItem ? 'scale(1.05)' : 'none'};
  }
`;

const DropButton = styled.button`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #ff4444;
  color: white;
  border: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 12px;
  transition: all 0.2s ease;
  padding: 0;

  &:hover {
    transform: scale(1.1);
    background: #ff0000;
  }
`;

const Inventory = () => {
  const dispatch = useDispatch();
  const equippedItem = useSelector(state => state.inventory.equippedItem);
  const [showDropModal, setShowDropModal] = useState(false);
  const [showWalletModal, setShowWalletModal] = useState(false);

  if (!equippedItem) return null;

  const handleInventoryClick = () => {
    if (equippedItem?.type === 'levelButton') {
      dispatch(setCurrentLevel(equippedItem.value));
    } else if (equippedItem?.type === 'wallet') {
      setShowWalletModal(true);
    }
  };

  const handleConfirmDrop = () => {
    dispatch(unequipItem());
    setShowDropModal(false);
    
    if (equippedItem.type === 'levelButton') {
      dispatch(setCurrentLevel(equippedItem.value));
    } else if (equippedItem.type === 'wallet') {
      dispatch(setCurrentLevel(8));
    }
  };

  const getItemName = () => {
    if (equippedItem.type === 'levelButton') {
      return `Level ${equippedItem.value} Button`;
    }
    return equippedItem.name || 'item';
  };

  return (
    <>
      <InventoryContainer onClick={handleInventoryClick}>
        <ItemSlot hasItem={true}>
          <DropButton onClick={(e) => {
            e.stopPropagation();
            setShowDropModal(true);
          }}>
            <FaTimes />
          </DropButton>
          {equippedItem?.type === 'levelButton' ? (
            <CollectibleLevelButton 
              variant={equippedItem.variant}
              small
            >
              {equippedItem.value}
            </CollectibleLevelButton>
          ) : equippedItem?.type === 'wallet' ? (
            <WalletItem onWalletClick={() => setShowWalletModal(true)} />
          ) : null}
        </ItemSlot>
      </InventoryContainer>

      <ConfirmationModal
        show={showDropModal}
        onConfirm={handleConfirmDrop}
        onCancel={() => setShowDropModal(false)}
        itemName={getItemName()}
      />

      <WalletModal 
        show={showWalletModal}
        onHide={() => setShowWalletModal(false)}
      />
    </>
  );
};

export default Inventory; 