import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { equipItem, swapEquippedItem, addCardToBox } from '../../store/slices/inventorySlice';
import ConfirmationModal from '../UI/ConfirmationModal';
import { isItemAvailable } from '../../utils/itemLocation';

const BaseCollectable = ({ 
  itemConfig,
  onBeforeCollect,
  children,
  renderItem 
}) => {
  const dispatch = useDispatch();
  const equippedItem = useSelector(state => state.inventory.equippedItem);
  const collected = !useSelector(state => isItemAvailable(state, itemConfig.id));
  const [showSwapModal, setShowSwapModal] = useState(false);

  const handleCollect = () => {
    if (collected) return;

    if (onBeforeCollect) {
      const shouldContinue = onBeforeCollect(equippedItem);
      if (!shouldContinue) return;
    }

    if (itemConfig.type === 'card' && equippedItem?.type === 'card-box') {
      dispatch(addCardToBox({ cardId: itemConfig.id }));
      return;
    }

    if (equippedItem) {
      setShowSwapModal(true);
    } else {
      dispatch(equipItem(itemConfig));
    }
  };

  const handleConfirmSwap = () => {
    if (equippedItem?.type === 'card' && itemConfig.type === 'card-box') {
      const boxWithCard = {
        ...itemConfig,
        collectedCards: { [equippedItem.id]: true }
      };
      dispatch(equipItem(boxWithCard));
    } else {
      dispatch(swapEquippedItem({
        newItem: itemConfig
      }));
    }
    setShowSwapModal(false);
  };

  return (
    <>
      {renderItem({ collected, handleCollect })}

      <ConfirmationModal
        show={showSwapModal}
        onConfirm={handleConfirmSwap}
        onCancel={() => setShowSwapModal(false)}
        itemName={equippedItem?.name || 'current item'}
        message={`Picking up the ${itemConfig.name} will return your ${equippedItem?.name || 'current item'} to its original location. Continue?`}
      />
    </>
  );
};

export default BaseCollectable; 