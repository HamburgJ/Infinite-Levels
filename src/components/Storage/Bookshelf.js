import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addToBookshelf, removeFromBookshelf, addCardToBox } from '../../store/slices/inventorySlice';
import { unequipItem, equipItem } from '../../store/slices/inventorySlice';
import ConfirmationModal from '../UI/ConfirmationModal';
import ItemRenderer from '../Items/ItemRenderer';

const BookshelfContainer = styled.div`
  width: 340px;
  height: 380px;
  background: linear-gradient(45deg, #8b4513, #a0522d);
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: relative;
  overflow: hidden;
`;

const ShelfRow = styled.div`
  flex: 1;
  background: linear-gradient(90deg, #5d4037, #4e342e);
  border-radius: 8px;
  padding: 12px;
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-around;
  position: relative;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const ShelfSlot = styled.div`
  width: 80px;
  height: 80px;
  background: transparent;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 6px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const EmptySlot = styled.div`
  width: 80px;
  height: 80px;
  border: 3px dashed rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.3);
  font-weight: bold;
  font-size: 0.9rem;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const Bookshelf = () => {
  const dispatch = useDispatch();
  const equippedItem = useSelector(state => state.inventory.equippedItem);
  const shelfItems = useSelector(state => state.inventory.bookshelf);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleSlotClick = (index) => {
    const itemInSlot = shelfItems[index];
    
    if (itemInSlot && !equippedItem) {
      // Pick up item from shelf
      if (itemInSlot.type === 'card-box') {
        // Preserve collected cards when moving card box
        const boxWithCards = {
          ...itemInSlot,
          collectedCards: itemInSlot.collectedCards || {}
        };
        dispatch(equipItem(boxWithCards));
      } else {
        dispatch(equipItem(itemInSlot));
      }
      dispatch(removeFromBookshelf({ index }));
    } else if (equippedItem && !itemInSlot) {
      // Place item in empty slot
      dispatch(addToBookshelf({ item: equippedItem, index }));
      dispatch(unequipItem());
    } else if (equippedItem && itemInSlot) {
      // Handle card and card box interactions
      if (equippedItem.type === 'card' && itemInSlot.type === 'card-box') {
        dispatch(addCardToBox({ cardId: equippedItem.id }));
        dispatch(unequipItem());
      } else if (equippedItem.type === 'card-box' && itemInSlot.type === 'card') {
        const boxWithCard = {
          ...equippedItem,
          collectedCards: { 
            ...equippedItem.collectedCards,
            [itemInSlot.id]: true 
          }
        };
        dispatch(removeFromBookshelf({ index }));
        dispatch(equipItem(boxWithCard));
      }
    }
  };

  return (
    <BookshelfContainer>
      {[0, 1, 2].map(row => (
        <ShelfRow key={row}>
          {[0, 1, 2].map(col => {
            const index = row * 3 + col;
            return (
              <ShelfSlot key={col} onClick={() => handleSlotClick(index)}>
                {shelfItems[index] ? (
                  <ItemRenderer item={shelfItems[index]} />
                ) : (
                  <EmptySlot>Empty</EmptySlot>
                )}
              </ShelfSlot>
            )}
          )}
        </ShelfRow>
      ))}
    </BookshelfContainer>
  );
};

export default Bookshelf; 