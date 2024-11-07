import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addToScale, removeFromScale, addCardToBox } from '../../store/slices/inventorySlice';
import { unequipItem, equipItem } from '../../store/slices/inventorySlice';
import ConfirmationModal from '../UI/ConfirmationModal';
import ItemRenderer from '../Items/ItemRenderer';
import cards from '../../data/cards';

const EmptySlot = styled.div`
  width: 80px;
  height: 80px;
  border: 3px dashed #666;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-weight: bold;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ScaleContainer = styled.div`
  width: 280px;
  height: 380px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(145deg, #2c3e50, #34495e);
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  justify-content: space-between;
`;

const DigitalScreen = styled.div`
  width: 240px;
  height: 40px;
  background: #1a1a1a;
  border-radius: 8px;
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 15px;
  font-family: 'Digital', monospace;
  color: #00ff00;
  font-size: 24px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5);
`;

const WeighingPlatform = styled.div`
  width: 240px;
  height: 240px;
  background: linear-gradient(135deg, #95a5a6, #bdc3c7);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const ItemContainer = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;



const Scale = () => {
  const dispatch = useDispatch();
  const equippedItem = useSelector(state => state.inventory.equippedItem);
  const scaleItem = useSelector(state => state.inventory.scale);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const getCardBoxWeight = (box) => {
    let weight = 1; // weight of box itself
    const WEIGHTS={
        'normal': 1,
        'gold-shiny': 10000,
        'diamond': 999999999,
        'dark-holographic': -0.1
    }
    for (const cardId in box.collectedCards) {
      const card = cards[cardId];
      weight += WEIGHTS[card.rarity];
    }
    return weight;
  }

  const getWeight = () => {
    switch (scaleItem?.type) {
      case 'card-box': 
        return getCardBoxWeight(scaleItem);
      case 'card': return 10;
      case 'diamond': return 1;
      case 'black-hole': return 1000;
      case 'encyclopedia': return 50;

      default: return 0;
    }
  };

  const handleScaleClick = () => {
    if (scaleItem && !equippedItem) {
      // Pick up item from scale
      if (scaleItem.type === 'card-box') {
        // Preserve collected cards when moving card box
        const boxWithCards = {
          ...scaleItem,
          collectedCards: scaleItem.collectedCards || {}
        };
        dispatch(equipItem(boxWithCards));
      } else {
        dispatch(equipItem(scaleItem));
      }
      dispatch(removeFromScale());
    } else if (equippedItem && !scaleItem) {
      // Place equipped item on scale
      dispatch(addToScale(equippedItem));
      dispatch(unequipItem());
    } else if (equippedItem && scaleItem) {
      // Handle card and card box interactions
      if (equippedItem.type === 'card' && scaleItem.type === 'card-box') {
        dispatch(addCardToBox({ cardId: equippedItem.id }));
        dispatch(unequipItem());
      } else if (equippedItem.type === 'card-box' && scaleItem.type === 'card') {
        const boxWithCard = {
          ...equippedItem,
          collectedCards: { 
            ...equippedItem.collectedCards,
            [scaleItem.id]: true 
          }
        };
        dispatch(removeFromScale());
        dispatch(equipItem(boxWithCard));
      } else {
        // Show swap confirmation for non-card interactions
        setShowConfirmModal(true);
      }
    }
  };

  const handleConfirmSwap = () => {
    const oldScaleItem = scaleItem;
    dispatch(addToScale(equippedItem));
    dispatch(equipItem(oldScaleItem));
    setShowConfirmModal(false);
  };

  return (
    <>
      <ScaleContainer onClick={handleScaleClick}>
        <WeighingPlatform>
          <ItemContainer>
            {scaleItem ? (
              <ItemRenderer item={scaleItem} />
            ) : (
              <EmptySlot>Empty</EmptySlot>
            )}
          </ItemContainer>
        </WeighingPlatform>
        <DigitalScreen>{getWeight().toFixed(2)}g</DigitalScreen>
      </ScaleContainer>

      <ConfirmationModal
        show={showConfirmModal}
        onConfirm={handleConfirmSwap}
        onCancel={() => setShowConfirmModal(false)}
        message="Swap the equipped item with the item on the scale?"
      />
    </>
  );
};

export default Scale; 