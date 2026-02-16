import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Modal } from 'react-bootstrap';
import CARDS from '../../data/cards';
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

const CardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardCount = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  background: #2196f3;
  color: white;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
`;

const EmptyMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: #666;
  font-style: italic;
`;

const CardTip = styled.div`
  text-align: center;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  color: #666;
  font-style: italic;
  border-top: 1px solid #eee;
  margin-top: 0.5rem;
`;

const CardBoxModal = ({ show, onHide }) => {
  const cardBoxContents = useSelector(state => state.inventory.cardBoxContents);
  
  const collectedCardsList = Object.entries(cardBoxContents)
    .filter(([_, count]) => count > 0)
    .map(([cardId, count]) => ({
      ...CARDS[cardId],
      id: cardId,
      count
    }));

  return (
    <StyledModal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Card Collection</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {collectedCardsList.length > 0 ? (
          <>
            <CardGrid>
              {collectedCardsList.map(card => (
                <CardWrapper key={card.id}>
                  <ItemRenderer 
                    item={card}
                  />
                  {card.count > 1 && (
                    <CardCount>{card.count}</CardCount>
                  )}
                </CardWrapper>
              ))}
            </CardGrid>
            <CardTip>
              🃏 Cards aren't just collectibles — every card has a value, and that value is a level number. Click a card to travel there.
            </CardTip>
          </>
        ) : (
          <EmptyMessage>No cards collected yet. Cards are hidden across every dimension — integers, decimals, and even the complex plane. Right-click a card to store it here.</EmptyMessage>
        )}
      </Modal.Body>
    </StyledModal>
  );
};

export default CardBoxModal; 