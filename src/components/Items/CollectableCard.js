import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentLevel } from '../../store';
import { rightClickCard, leftClickCard } from '../../store/slices/inventorySlice';
import BaseCollectable from './BaseCollectable';
import CARDS from '../../data/cards';
import { getCardComponent } from './SpecialCards';
import { useAchievements} from '../../hooks/useAchievements';

const wobbleFloat = keyframes`
  0%, 100% { transform: translate(0, 0) rotate(-4deg); }
  25% { transform: translate(0, -10px) rotate(4deg); }
  50% { transform: translate(0, 0px) rotate(4deg); }
  75% { transform: translate(0, -10px) rotate(-4deg); }
`;

const CardWrapper = styled.div`
  animation: ${wobbleFloat} 6s ease-in-out infinite;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const getLevelValue = (value) => {
    if (value === "A") return Math.floor(Math.random() * 2)*10 + 1;
    if (value === "J" || value === "Q" || value === "K") return 10;
    return parseInt(value);
};

const CollectableCard = ({ cardId, value, suit, forceAvailable = false, isInventory = false, isStorage = false }) => {
  const dispatch = useDispatch();
  const { unlockAchievement } = useAchievements();
  const card = CARDS[cardId];
  const cardType = card?.rarity || 'normal';
  const CardComponent = getCardComponent(cardType);

  const displayValue = card?.value || value;
  const displaySuit = card?.suit || suit;

  const equippedItem = useSelector(state => state.inventory.equippedItem);
  const isCollected = useSelector(state => 
    state.inventory.collectedCards ? cardId in state.inventory.collectedCards : false
  );

  const effectiveIsCollected = isInventory ? false : (forceAvailable ? false : isCollected);

  const itemConfig = {
    type: 'card',
    id: cardId,
    name: `${displayValue} of ${displaySuit}`,
    suit: displaySuit,
    value: displayValue,
    collectableCardId: cardId,
    rarity: cardType
  };

  const handleClick = (e) => {
    const isRightClick = e?.type === 'contextmenu';
    
    console.log('CollectableCard - Click Event:', {
      isRightClick,
      isStorage,
      isInventory,
      cardId,
      value,
      equippedItem,
      isCollected
    });
    
    if (isInventory || isStorage) {
      if (isRightClick) {
        e.preventDefault();
        dispatch(rightClickCard({ 
          cardId, 
          collectableCardId: cardId,
          fromStorage: isStorage,
          fromInventory: isInventory
        }));
      } else {
        unlockAchievement('CARD_TRAVEL');
        dispatch(setCurrentLevel(getLevelValue(value)));
      }
      return;
    }

    // Regular collectible behavior
    if (isRightClick) {
      e.preventDefault();
      dispatch(rightClickCard({ 
        cardId, 
        collectableCardId: cardId
      }));
      if (cardType === 'dark-holographic') {
        unlockAchievement('DARK_HOLOGRAPHIC');
      } else if (cardType === 'gold-shiny') {
        unlockAchievement('GOLD_SHINY');
      } else if (cardType === 'diamond') {
        unlockAchievement('DIAMOND_CARD');
      }
    } else {
      if (isCollected) {
        dispatch(leftClickCard({ 
          cardId, 
          collectableCardId: cardId
        }));
        return;
      }
      unlockAchievement('CARD_TRAVEL');
      console.log('CollectableCard - Setting current level to:', {
        real: getLevelValue(value),
        imag: 0
      });
      dispatch(setCurrentLevel({
        real: getLevelValue(value),
        imag: 0
      }));
    }
  };

  return (
    <BaseCollectable
      itemConfig={itemConfig}
      useBaseCollection={false}
      renderItem={({ collected }) => (
        <CardWrapper>
          <CardComponent 
            collected={effectiveIsCollected} 
            onClick={handleClick}
            onContextMenu={handleClick}
            className={displaySuit}
          >
            {displayValue} {displaySuit === 'hearts' ? '♥' : displaySuit === 'diamonds' ? '♦' : displaySuit === 'clubs' ? '♣' : '♠'}
          </CardComponent>
        </CardWrapper>
      )}
    />
  );
};

export default CollectableCard;