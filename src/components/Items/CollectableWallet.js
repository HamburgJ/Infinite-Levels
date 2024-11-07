import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaWallet } from 'react-icons/fa';
import ConfirmationModal from '../UI/ConfirmationModal';
import { equipItem, swapEquippedItem } from '../../store/slices/inventorySlice';
import styled from 'styled-components';
const WalletStyle = styled.div`
  font-size: 2rem;
  margin: 2rem 0;
  cursor: pointer;
  transition: transform 0.2s;
  opacity: ${props => props.collected ? 0.5 : 1};
  pointer-events: ${props => props.collected ? 'none' : 'auto'};

  &:hover {
    transform: ${props => props.collected ? 'none' : 'scale(1.1)'};
  }
`;

const CollectibleWallet = () => {
  const dispatch = useDispatch();
  const collectedItems = useSelector(state => state.inventory.collectedItems);
  const equippedItem = useSelector(state => state.inventory.equippedItem);
  const collected = collectedItems['wallet-1'];
  const [showSwapModal, setShowSwapModal] = useState(false);

  const handleCollect = () => {
    const newItem = {
      type: 'wallet',
      id: 'wallet-1',
      name: 'Money Wallet'
    };

    if (equippedItem) {
      setShowSwapModal(true);
    } else {
      dispatch(equipItem(newItem));
    }
  };

  const handleConfirmSwap = () => {
    dispatch(swapEquippedItem({
      type: 'wallet',
      id: 'wallet-1',
      name: 'Money Wallet'
    }));
    setShowSwapModal(false);
  };

  return (
    <>
      <WalletStyle collected={collected} onClick={handleCollect}>
        <FaWallet />
      </WalletStyle>

      <ConfirmationModal
        show={showSwapModal}
        onConfirm={handleConfirmSwap}
        onCancel={() => setShowSwapModal(false)}
        itemName={equippedItem?.name || 'current item'}
        message={`Picking up the Money Wallet will return your ${equippedItem?.name || 'current item'} to its original location. Continue?`}
      />
    </>
  );
};

export default CollectibleWallet; 