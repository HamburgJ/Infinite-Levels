import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Modal } from 'react-bootstrap';
import BaseModal from './BaseModal';
import CARDS from '../../data/cards';
import { DarkHolographicCard, GoldShinyCard, DiamondCard } from '../Items/SpecialCards';
import { PlayingCard } from '../Items/CollectableCard';

const StyledModal = styled(Modal)`
  .modal-content {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border: none;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const CollectedCard = styled(PlayingCard)`
  width: 80px;
  height: 120px;
  font-size: 1.5rem;
  margin: 0 auto;
  cursor: default;
  opacity: 1;
  pointer-events: none;
`;

const EmptyMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: #666;
  font-style: italic;
`;

const getCardComponent = (type) => {
  switch (type) {
    case 'dark-holographic':
      return styled(DarkHolographicCard)`
        width: 80px;
        height: 120px;
        font-size: 1.5rem;
        margin: 0 auto;
        cursor: default;
        opacity: 1;
        pointer-events: none;
      `;
    case 'gold-shiny':
      return styled(GoldShinyCard)`
        width: 80px;
        height: 120px;
        font-size: 1.5rem;
        margin: 0 auto;
        cursor: default;
        opacity: 1;
        pointer-events: none;
      `;
    case 'diamond':
      return styled(DiamondCard)`
        width: 80px;
        height: 120px;
        font-size: 1.5rem;
        margin: 0 auto;
        cursor: default;
        opacity: 1;
        pointer-events: none;
      `;
    default:
      return CollectedCard;
  }
};

const CardBoxModal = ({ show, onHide }) => {
  const collectedCards = useSelector(state => state.inventory.cards);
  const theme = useSelector(state => state.game.theme);

  const collectedCardsList = Object.entries(CARDS)
    .filter(([cardId]) => collectedCards[cardId]);

  return (
    <StyledModal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Card Collection</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {collectedCardsList.length > 0 ? (
          <CardGrid>
            {collectedCardsList.map(([cardId, card]) => {
              const CardComponent = getCardComponent(card.type);
              return (
                <CardComponent 
                  key={cardId}
                  className={card.suit}
                >
                  {card.value} {card.suit === 'hearts' ? '♥' : card.suit === 'diamonds' ? '♦' : card.suit === 'clubs' ? '♣' : '♠'}
                </CardComponent>
              );
            })}
          </CardGrid>
        ) : (
          <EmptyMessage>No cards collected yet</EmptyMessage>
        )}
      </Modal.Body>
    </StyledModal>
  );
};

export default CardBoxModal; 