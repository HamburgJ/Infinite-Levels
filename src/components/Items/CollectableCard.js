import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addCardToBox, equipCard } from '../../store/slices/inventorySlice';
import BaseCollectable from './BaseCollectable';
import { DarkHolographicCard, HolographicCard, NormalCard, GoldStarCard } from './SpecialCards';
import CARDS from '../../data/cards';
import { getCardComponent } from './SpecialCards';

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

const CollectableCard = ({ cardId, value, suit }) => {
    const dispatch = useDispatch();
    const cardType = CARDS[cardId]?.rarity || 'normal';
    const CardComponent = getCardComponent(cardType);
    const equippedItem = useSelector(state => state.inventory.equippedItem);
  
    const itemConfig = {
      type: 'card',
      id: cardId,
      name: `${value} of ${suit}`,
      suit,
      value
    };
  
    const handleBeforeCollect = (equippedItem) => {
      if (equippedItem?.type === 'card-box') {
        dispatch(addCardToBox({ cardId }));
        return false;
      }
      return true;
    };
  
    return (
      <BaseCollectable
        itemConfig={itemConfig}
        onBeforeCollect={handleBeforeCollect}
        renderItem={({ collected, handleCollect }) => (
          <CardWrapper>
            <CardComponent 
              collected={collected} 
              onClick={() => {
                console.log('clicked');
                handleCollect();
              }}
              className={suit}
            >
              {value} {suit === 'hearts' ? '♥' : suit === 'diamonds' ? '♦' : suit === 'clubs' ? '♣' : '♠'}
            </CardComponent>
          </CardWrapper>
        )}
      />
    );
  };
  
  export default CollectableCard;