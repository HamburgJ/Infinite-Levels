import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addToScale, removeFromScale, addCardToBox, addToWallet } from '../../store/slices/inventorySlice';
import { unequipItem, equipItem } from '../../store/slices/inventorySlice';
import ConfirmationModal from '../UI/ConfirmationModal';
import ItemRenderer from '../Items/ItemRenderer';
import cards from '../../data/cards';
import { setCurrentLevel } from '../../store/slices/gameSlice';
import { useAchievements } from '../../hooks/useAchievements';
import LevelButton from '../UI/LevelButton';


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
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
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
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
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
  const walletDenominations = useSelector(state => state.inventory.walletDenominations);
  const collectedCards = useSelector(state => state.inventory.collectedCards);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const { unlockAchievement } = useAchievements();

  const ITEM_WEIGHTS = {
    // Base items
    'key': 50,
    'levelButton': 42,
    'book': 300,
    'wallet': 150, // Base weight, contents added separately
    'encyclopedia': 500,
    'card-box': 200, // Base weight, contents added separately
    'card': {
      'normal': 10,
      'gold-shiny': 50,
      'diamond': 100,
      'dark-holographic': 5
    },
    'currency': {
      1: 2.5,    // Penny
      5: 5,      // Nickel
      10: 2.268, // Dime
      25: 5.67,  // Quarter
      500: 1,    // $5 bill
      1000: 1,   // $10 bill
      2000: 1,   // $20 bill
      5000: 1,   // $50 bill
      10000: 1   // $100 bill
    },
    'text': (length) => Math.max(1, length * 0.5),
    'diamond': 3.52,
    'black-hole': Number.MAX_SAFE_INTEGER
  };

  const getCardBoxWeight = (cardBoxContents) => {
    let weight = ITEM_WEIGHTS['card-box'];
    
    // Add weight for each card in the box
    Object.entries(cardBoxContents).forEach(([cardId, count]) => {
      if (count > 0) {
        const card = cards[cardId];
        const cardWeight = ITEM_WEIGHTS.card[card.rarity || 'normal'];
        weight += cardWeight * count;
      }
    });
    
    return weight;
  };

  const getWalletWeight = (denominations) => {
    let weight = ITEM_WEIGHTS.wallet;
    
    // Add weight for each denomination
    Object.entries(denominations).forEach(([value, count]) => {
      if (count > 0) {
        weight += ITEM_WEIGHTS.currency[parseInt(value)] * count;
      }
    });
    
    return weight;
  };

  const getWeight = () => {
    if (!scaleItem) return 0;

    switch (scaleItem.type) {
      case 'wallet':
        return getWalletWeight(walletDenominations);
      case 'card-box':
        return getCardBoxWeight(collectedCards);
      case 'card':
        return ITEM_WEIGHTS.card[scaleItem.rarity || 'normal'];
      case 'text':
        return ITEM_WEIGHTS.text(scaleItem.text.length);
      case 'currency':
        return ITEM_WEIGHTS.currency[scaleItem.value] || 0;
      case 'black-hole':
        return ITEM_WEIGHTS['black-hole'];
      default:
        return ITEM_WEIGHTS[scaleItem.type] || 0;
    }
  };

  const handleScaleClick = (e) => {

    e.preventDefault();
    
    if (equippedItem && !scaleItem) {
      dispatch(addToScale({ item: equippedItem }));
      dispatch(unequipItem());
      return;
    } 

    if (scaleItem) {
      if (!equippedItem) {
        dispatch(equipItem(scaleItem));
        dispatch(removeFromScale());
      } else if (equippedItem.type === 'currency' && scaleItem.type === 'wallet') {
        dispatch(addToWallet({ value: equippedItem.value }));
        dispatch(removeFromScale());
      } else if (equippedItem.type === 'card-box' && scaleItem.type === 'card') {
        dispatch(addCardToBox({ cardId: equippedItem.id }));
        dispatch(removeFromScale());
      } else if (equippedItem.type === 'wallet' && scaleItem.type === 'currency') {
        dispatch(addToWallet({ value: scaleItem.value }));
        dispatch(removeFromScale());
      } else if (equippedItem.type === 'card' && scaleItem.type === 'card-box') {
        dispatch(addCardToBox({ cardId: equippedItem.id }));
        dispatch(removeFromScale());
      }
    }
  };

  const handleConfirmSwap = () => {
    const oldScaleItem = scaleItem;
    dispatch(addToScale(equippedItem));
    dispatch(equipItem(oldScaleItem));
    setShowConfirmModal(false);
  };

  const handleScreenClick = (e) => {
    e.stopPropagation(); // Prevent triggering the ScaleContainer click
    const weight = getWeight();
    dispatch(setCurrentLevel({real: Math.floor(weight), imag: 0}));
    unlockAchievement('SCALE_TRAVEL');
  };

  return (
    <>
      <ScaleContainer >
        <WeighingPlatform
          onClick={(e) => handleScaleClick(e)}
          onContextMenu={(e) => handleScaleClick(e)}>
          <ItemContainer>
            {scaleItem ? (
              <ItemRenderer item={scaleItem} isStorage={true} isInventory={false} forceAvailable={true} />
            ) : (
              <EmptySlot>Empty</EmptySlot>
            )}
          </ItemContainer>
        </WeighingPlatform>
        <LevelButton
          targetLevel={{real: Math.floor(getWeight()), imag: 0}}
          onClick={handleScreenClick}
          isDigitalScreen={true}
        >
          {getWeight().toFixed(2)}g
        </LevelButton>
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