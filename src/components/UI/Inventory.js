import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentLevel } from '../../store';
import { unequipItem, equipItem, dropItem } from '../../store/slices/inventorySlice';
import WalletItem from '../Items/WalletItem';
import { FaTimes, FaKey, FaBook, FaBox } from 'react-icons/fa';
import ConfirmationModal from './ConfirmationModal';
import WalletModal from './WalletModal';
import BaseModal from './BaseModal';
import CardBoxModal from './CardBoxModal';
import ItemRenderer from '../Items/ItemRenderer';
import { useAchievements } from '../../hooks/useAchievements';
import { Modal, Button } from 'react-bootstrap';
import { colors, radii, shadows, transitions } from '../../styles/theme';

const InventoryContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  filter: drop-shadow(0 2px 12px rgba(0, 0, 0, 0.15));
`;

const ItemSlot = styled.div`
  width: 70px;
  height: 70px;
  background: ${colors.surface};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 2px solid ${colors.borderStrong};
  border-radius: ${radii.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${props => props.hasItem ? 'pointer' : 'default'};
  transition: all ${transitions.fast};
  position: relative;
  overflow: visible;

  &:hover {
    border-color: ${colors.primary};
    box-shadow: ${shadows.glow};
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
  background: ${colors.danger};
  color: white;
  border: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 12px;
  transition: all ${transitions.fast};
  padding: 0;

  &:hover {
    transform: scale(1.15);
    background: #b91c1c;
  }
`;

const TextItem = styled.div`
  font-family: var(--font-mono);
  font-size: 13px;
  letter-spacing: 0.02em;
  padding: 4px 8px;
  background: ${colors.primary};
  color: white;
  border-radius: ${radii.sm};
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: all ${transitions.fast};
  
  &:hover {
    background: ${colors.primaryHover};
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

const tutorialFadeIn = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`;

const InventoryTutorial = styled.div`
  position: absolute;
  bottom: calc(100% + 12px);
  right: 0;
  background: rgba(0, 0, 0, 0.88);
  color: white;
  padding: 0.6rem 0.8rem;
  border-radius: 8px;
  font-size: 0.75rem;
  width: 200px;
  line-height: 1.4;
  z-index: 10;
  animation: ${tutorialFadeIn} 0.4s ease-out;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    right: 20px;
    border: 6px solid transparent;
    border-top-color: rgba(0, 0, 0, 0.88);
  }
`;

const Inventory = () => {
  const dispatch = useDispatch();
  const equippedItem = useSelector(state => state.inventory.equippedItem);
  const heldText = useSelector(state => state.inventory.heldText);
  const [showDropModal, setShowDropModal] = useState(false);
  const [showWalletModal, setShowWalletModal] = useState(false);
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
  const [showTutorial, setShowTutorial] = useState(false);
  const hasShownTutorial = useRef(false);

  // Show tutorial tooltip the first time an item appears in inventory
  useEffect(() => {
    if (equippedItem && !hasShownTutorial.current) {
      const seen = localStorage.getItem('inventoryTutorialSeen');
      if (!seen) {
        setShowTutorial(true);
        hasShownTutorial.current = true;
        localStorage.setItem('inventoryTutorialSeen', 'true');
        const timer = setTimeout(() => setShowTutorial(false), 6000);
        return () => clearTimeout(timer);
      }
    }
  }, [equippedItem]);

  if (!equippedItem) return null;

  const handleInventoryClick = () => {
    if (equippedItem?.type === 'levelButton') {
      if (currentLevel !== equippedItem.value) {
        unlockAchievement('BUTTON_INVENTORY_TRAVEL');
      }
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
      if (item.value === "Infinity" || (typeof item.value === 'object' && item.value.real === "Infinity")) {
        return 'Level ∞ Button';
      }
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
            forceAvailable={true}
          />
          {showTutorial && (
            <InventoryTutorial>
              📦 This is your inventory! You can hold one item at a time. Click it to use it, or ✕ to drop it. Picking up a new item will swap out the old one.
            </InventoryTutorial>
          )}
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