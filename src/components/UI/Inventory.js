import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentLevel } from '../../store';
import { unequipItem, equipItem } from '../../store/slices/inventorySlice';
import { CollectibleLevelButton } from './SharedStyles';
import WalletItem from '../Items/WalletItem';
import { FaTimes, FaKey, FaBook, FaBox } from 'react-icons/fa';
import ConfirmationModal from './ConfirmationModal';
import WalletModal from './WalletModal';
import BaseModal from './BaseModal';
import NumberEncyclopedia from '../Items/NumberEncyclopedia';
import CardBoxModal from './CardBoxModal';

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

const TextItem = styled.div`
  font-size: 14px;
  padding: 4px 8px;
  background: rgb(0, 96, 238);
  color: white;
  border-radius: 4px;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: all 0.2s;
  
  &:hover {
    background: rgb(0, 78, 194);
  }
`;

const Inventory = () => {
  const dispatch = useDispatch();
  const equippedItem = useSelector(state => state.inventory.equippedItem);
  const heldText = useSelector(state => state.inventory.heldText);
  const [showDropModal, setShowDropModal] = useState(false);
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [showEncyclopediaModal, setShowEncyclopediaModal] = useState(false);
  const [showSwapModal, setShowSwapModal] = useState(false);
  const [pendingItem, setPendingItem] = useState(null);
  const theme = useSelector(state => state.game.theme);
  const [showCardBoxModal, setShowCardBoxModal] = useState(false);

  if (!equippedItem) return null;

  const handleInventoryClick = () => {
    if (equippedItem?.type === 'levelButton') {
      dispatch(setCurrentLevel(equippedItem.value));
    } else if (equippedItem?.type === 'wallet') {
      setShowWalletModal(true);
    } else if (equippedItem?.type === 'card-box') {
      setShowCardBoxModal(true);
    } else if (equippedItem?.type === 'text' && heldText?.level) {
      dispatch(setCurrentLevel(heldText.level));
    }
  };

  const handleConfirmDrop = () => {
    dispatch(unequipItem());
    setShowDropModal(false);
  };

  const handleConfirmSwap = () => {
    if (pendingItem) {
      dispatch(unequipItem());
      dispatch(equipItem(pendingItem));
      setPendingItem(null);
      setShowSwapModal(false);
    }
  };

  const getItemName = (item = equippedItem) => {
    if (!item) return 'item';
    
    if (item.type === 'levelButton') {
      return `Level ${item.value} Button`;
    }
    return item.name || 'item';
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
          {equippedItem?.type === 'key' ? (
            <FaKey style={{ fontSize: '2rem', color: 'gold' }} />
          ) : equippedItem?.type === 'levelButton' ? (
            <CollectibleLevelButton 
              variant={equippedItem.variant}
              small
            >
              {equippedItem.value}
            </CollectibleLevelButton>
          ) : equippedItem?.type === 'wallet' ? (
            <WalletItem onWalletClick={() => setShowWalletModal(true)} />
          ) : equippedItem?.type === 'encyclopedia' ? (
            <FaBook style={{ fontSize: '1.5rem' }} onClick={() => setShowEncyclopediaModal(true)} />
          ) : equippedItem?.type === 'card-box' ? (
            <FaBox style={{ fontSize: '1.5rem' }} />
          ) : equippedItem?.type === 'card' ? (
            <PlayingCard>
              {equippedItem.value} {equippedItem.suit === 'hearts' ? '♥' : equippedItem.suit === 'diamonds' ? '♦' : equippedItem.suit === 'clubs' ? '♣' : '♠'}
            </PlayingCard>
          ) : equippedItem?.type === 'text' ? (
            <TextItem>{equippedItem.content}</TextItem>
          ) : null}
        </ItemSlot>
      </InventoryContainer>

      <ConfirmationModal
        show={showDropModal}
        onConfirm={handleConfirmDrop}
        onCancel={() => setShowDropModal(false)}
        itemName={getItemName()}
      />

      <ConfirmationModal
        show={showSwapModal}
        onConfirm={handleConfirmSwap}
        onCancel={() => {
          setPendingItem(null);
          setShowSwapModal(false);
        }}
        itemName={getItemName()}
        message={pendingItem ? 
          `Picking up ${getItemName(pendingItem)} will return your ${getItemName()} to its original location. Continue?` :
          'Are you sure you want to swap items?'
        }
      />

      <WalletModal 
        show={showWalletModal}
        onHide={() => setShowWalletModal(false)}
      />

      <BaseModal 
        show={showEncyclopediaModal}
        onHide={() => setShowEncyclopediaModal(false)}
        centered
        theme={theme}
      >
        <NumberEncyclopedia onClose={() => setShowEncyclopediaModal(false)} />
      </BaseModal>

      <CardBoxModal 
        show={showCardBoxModal}
        onHide={() => setShowCardBoxModal(false)}
      />
    </>
  );
};

const PlayingCard = styled.div`
  width: 40px;
  height: 60px;
  background: white;
  border: 2px solid #000;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
`;

export default Inventory; 