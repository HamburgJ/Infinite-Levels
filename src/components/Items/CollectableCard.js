import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { equipItem, swapEquippedItem, collectCard } from '../../store/slices/inventorySlice';
import ConfirmationModal from '../UI/ConfirmationModal';
import { DarkHolographicCard, GoldShinyCard, DiamondCard } from './SpecialCards';
import CARDS from '../../data/cards';

const CardContainer = styled.div`
  text-align: center;
  margin: 2rem 0;
`;

const wobbleFloat = keyframes`
  0%, 100% {
    transform: translate(0, 0) rotate(-4deg);
  }
  25% {
    transform: translate(0, -10px) rotate(4deg);
  }
  50% {
    transform: translate(0, 0px) rotate(4deg);
  }
  75% {
    transform: translate(0, -10px) rotate(-4deg);
  }
`;

const PlayingCard = styled.div`
  display: inline-block;
  cursor: pointer;
  width: 60px;
  height: 90px;
  background: white;
  border: 2px solid #000;
  border-radius: 5px;
  padding: 5px;
  font-size: 1.5rem;
  opacity: ${props => props.collected ? 0.5 : 1};
  pointer-events: ${props => props.collected ? 'none' : 'auto'};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: ${wobbleFloat} 3s ease-in-out infinite;
  will-change: transform;
  transform-origin: center center;

  &:hover {
    transform: ${props => props.collected ? 'none' : 'scale(1.1)'};
  }

  &.hearts, &.diamonds {
    color: red;
  }
`;

const getCardComponent = (type) => {
  switch (type) {
    case 'dark-holographic':
      return DarkHolographicCard;
    case 'gold-shiny':
      return GoldShinyCard;
    case 'diamond':
      return DiamondCard;
    default:
      return PlayingCard;
  }
};

const CollectableCard = ({ cardId, value, suit }) => {
  const dispatch = useDispatch();
  const collectedCards = useSelector(state => state.inventory.cards);
  const equippedItem = useSelector(state => state.inventory.equippedItem);
  const [showSwapModal, setShowSwapModal] = useState(false);
  const collected = collectedCards[cardId];
  
  // Get the card type from the CARDS dictionary
  const cardType = CARDS[cardId]?.type || 'normal';
  const CardComponent = getCardComponent(cardType);

  const handleCollect = () => {
    if (collected) return;
    
    // If card box is equipped, directly collect the card
    if (equippedItem?.type === 'card-box') {
      dispatch(collectCard({ cardId }));
      return;
    }
    
    const newItem = {
      type: 'card',
      id: cardId,
      name: `${value} of ${suit}`,
      suit,
      value
    };

    if (equippedItem) {
      setShowSwapModal(true);
    } else {
      dispatch(equipItem(newItem));
    }
  };

  const handleConfirmSwap = () => {
    dispatch(swapEquippedItem({
      type: 'card',
      id: cardId,
      name: `${value} of ${suit}`,
      suit,
      value
    }));
    setShowSwapModal(false);
  };

  // if the card is collected, don't render it
  if (collected) {
    return null;
  }

  if (equippedItem?.id === cardId) {
    return null;
  }

  return (
    <CardContainer>
      <CardComponent 
        collected={collected} 
        onClick={handleCollect}
        className={suit}
      >
        {value} {suit === 'hearts' ? '♥' : suit === 'diamonds' ? '♦' : suit === 'clubs' ? '♣' : '♠'}
      </CardComponent>

      <ConfirmationModal
        show={showSwapModal}
        onConfirm={handleConfirmSwap}
        onCancel={() => setShowSwapModal(false)}
        itemName={equippedItem?.name || 'current item'}
        message={`Picking up this card will return your ${equippedItem?.name || 'current item'} to its original location. Continue?`}
      />
    </CardContainer>
  );
};

export default CollectableCard;

export { PlayingCard }; 