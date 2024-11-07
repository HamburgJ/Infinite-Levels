import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Modal } from 'react-bootstrap';
import BaseModal from './BaseModal';
import CARDS from '../../data/cards';
import { DarkHolographicCard, GoldShinyCard, DiamondCard } from '../Items/SpecialCards';
import ItemRenderer from '../Items/ItemRenderer';

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

const EmptyMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: #666;
  font-style: italic;
`;


const CardBoxModal = ({ show, onHide }) => {
  const equippedItem = useSelector(state => state.inventory.equippedItem);
  const collectedCards = equippedItem?.collectedCards || {};
  const theme = useSelector(state => state.game.theme);

  const collectedCardsList = Object.entries(collectedCards)
    .filter(([cardId, isCollected]) => isCollected)
    .map(([cardId]) => ({
      ...CARDS[cardId],
      id: cardId
    }));

  console.log('collectedCards', collectedCards);
  console.log('collectedCardsList', collectedCardsList);

  return (
    <StyledModal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Card Collection</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {collectedCardsList.length > 0 ? (
          <CardGrid>
            {collectedCardsList.map(card => (
              <ItemRenderer 
                key={card.id}
                item={card}
              />
            ))}
          </CardGrid>
        ) : (
          <EmptyMessage>No cards collected yet</EmptyMessage>
        )}
      </Modal.Body>
    </StyledModal>
  );
};

export default CardBoxModal; 