import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentLevel } from '../../store';
import { unequipItem, equipItem, dropItem } from '../../store/slices/inventorySlice';
import { CollectibleLevelButton } from './SharedStyles';
import WalletItem from '../Items/WalletItem';
import { FaTimes, FaKey, FaBook, FaBox } from 'react-icons/fa';
import ConfirmationModal from './ConfirmationModal';
import WalletModal from './WalletModal';
import BaseModal from './BaseModal';
import NumberEncyclopedia from '../Items/NumberEncyclopedia';
import CardBoxModal from './CardBoxModal';
import ItemRenderer from '../Items/ItemRenderer';
import { useAchievements } from '../../hooks/useAchievements';
import { Modal, Button } from 'react-bootstrap';

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
  overflow: visible;

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

const InventoryPlayingCard = styled.div`
  width: 40px;
  height: 60px;
  background: ${props => {
    switch (props.cardType) {
      case 'dark-holographic':
        return 'linear-gradient(135deg, #1a1a1a, #333)';
      case 'gold-shiny':
        return 'linear-gradient(135deg, #ffd700, #b8860b)';
      case 'diamond':
        return 'linear-gradient(135deg, #e3f2fd, #90caf9)';
      default:
        return 'white';
    }
  }};
  border: 2px solid ${props => {
    switch (props.cardType) {
      case 'dark-holographic':
        return '#444';
      case 'gold-shiny':
        return '#966b00';
      case 'diamond':
        return '#42a5f5';
      default:
        return '#000';
    }
  }};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: ${props => {
    switch (props.cardType) {
      case 'dark-holographic':
        return '#fff';
      case 'gold-shiny':
        return '#442c00';
      case 'diamond':
        return '#1565c0';
      default:
        return props.suit === 'hearts' || props.suit === 'diamonds' ? 'red' : 'black';
    }
  }};
  position: relative;
  overflow: hidden;
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
  const currentLevel = useSelector(state => state.game.currentLevel);
  const { unlockAchievement } = useAchievements();
  const [showWalletDropModal, setShowWalletDropModal] = useState(false);
  const walletDenominations = useSelector(state => state.inventory.walletDenominations);
  const [showCardBoxDropModal, setShowCardBoxDropModal] = useState(false);
  const cardBoxContents = useSelector(state => state.inventory.cardBoxContents);

  if (!equippedItem) return null;

  const handleInventoryClick = () => {
    if (equippedItem?.type === 'levelButton') {
      if (currentLevel !== equippedItem.value) {
        unlockAchievement('BUTTON_INVENTORY_TRAVEL');
      } else { console.log('equippedItem.value', equippedItem.value, 'currentLevel', currentLevel)}
      dispatch(setCurrentLevel(equippedItem.value));
    } else if (equippedItem?.type === 'wallet') {
      setShowWalletModal(true);
    } else if (equippedItem?.type === 'card-box') {
      setShowCardBoxModal(true);
    } else if (equippedItem?.type === 'text' && heldText?.level) {
      dispatch(setCurrentLevel(heldText.level));
    }
  };

  const handleDropClick = (e) => {
    e.stopPropagation();
    if (equippedItem?.type === 'wallet') {
      const hasCoins = Object.values(walletDenominations).some(value => value > 0);
      if (hasCoins) {
        setShowWalletDropModal(true);
      } else {
        setShowDropModal(true);
      }
    } else if (equippedItem?.type === 'card-box') {
      const hasCards = Object.values(cardBoxContents).some(value => value > 0);
      if (hasCards) {
        setShowCardBoxDropModal(true);
      } else {
        setShowDropModal(true);
      }
    } else {
      setShowDropModal(true);
    }
  };

  const handleConfirmDrop = () => {
    dispatch(dropItem({}));
    console.log('dropped item');
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

  const handleWalletDrop = (returnCoins) => {
    dispatch(dropItem({ returnCoins }));
    setShowWalletDropModal(false);
  };

  const handleCardBoxDrop = (returnCards) => {
    dispatch(dropItem({ returnCards }));
    setShowCardBoxDropModal(false);
  };

  return (
    <>
      <InventoryContainer onClick={handleInventoryClick}>
        <ItemSlot hasItem={true}>
          <DropButton onClick={handleDropClick}>
            <FaTimes />
          </DropButton>
          <ItemRenderer 
            item={equippedItem}
            onWalletClick={() => setShowWalletModal(true)}
            onEncyclopediaClick={() => setShowEncyclopediaModal(true)}
            forceAvailable={true}
          />
        </ItemSlot>
      </InventoryContainer>

      <Modal show={showDropModal} onHide={() => setShowDropModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Drop Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to drop {getItemName()}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDropModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleConfirmDrop}>
            Drop
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showWalletDropModal} onHide={() => setShowWalletDropModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Drop Wallet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          What would you like to do with the coins in your wallet?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowWalletDropModal(false)}>
            Cancel
          </Button>
          <Button variant="warning" onClick={() => handleWalletDrop(true)}>
            Return Coins to Original Locations
          </Button>
          <Button variant="primary" onClick={() => handleWalletDrop(false)}>
            Keep Coins in Wallet
          </Button>
        </Modal.Footer>
      </Modal>

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

      <Modal show={showCardBoxDropModal} onHide={() => setShowCardBoxDropModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Drop Card Box</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          What would you like to do with the cards in your box?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowCardBoxDropModal(false)}>
            Cancel
          </Button>
          <Button variant="warning" onClick={() => handleCardBoxDrop(true)}>
            Return Cards to Original Locations
          </Button>
          <Button variant="primary" onClick={() => handleCardBoxDrop(false)}>
            Keep Cards in Box
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Inventory; 