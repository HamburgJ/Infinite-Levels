import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { equipItem, swapEquippedItem, addCardToBox, unequipItem, removeMoneyFromWallet } from '../../store/slices/inventorySlice';
import ConfirmationModal from '../UI/ConfirmationModal';
import { isItemAvailable } from '../../utils/itemLocation';

const BaseCollectable = ({ 
  itemConfig,
  onBeforeCollect,
  children,
  renderItem,
  isButton = false,
  onButtonClick = null,
  useBaseCollection = true
}) => {
  const dispatch = useDispatch();
  const equippedItem = useSelector(state => state.inventory.equippedItem);
  const collected = !useSelector(state => isItemAvailable(state, itemConfig.id));
  const [showSwapModal, setShowSwapModal] = useState(false);

  const handleCollect = (e) => {
    console.group('BaseCollectable.handleCollect');
    console.log('Initial state:', { equippedItem, collected, isButton, useBaseCollection });

    if (e?.type === 'contextmenu') {
      e.preventDefault();
      console.log('Right click detected');
    }

    if (!useBaseCollection) {
      if (onBeforeCollect) {
        onBeforeCollect(equippedItem, e?.type === 'contextmenu');
      }
      if (isButton && !e?.type === 'contextmenu') {
        onButtonClick?.(e);
      }
      console.groupEnd();
      return;
    }

    if (equippedItem?.id === itemConfig.id) {
      console.log('Unequipping item');
      dispatch(unequipItem());
      console.groupEnd();
      return;
    }

    if (isButton && onBeforeCollect) {
      console.log('Checking for wallet behavior');
      const shouldContinue = onBeforeCollect(equippedItem, e?.type === 'contextmenu');
      console.log('Wallet behavior check result:', shouldContinue);
      if (!shouldContinue) {
        console.groupEnd();
        return;
      }
    }

    if (collected && (!equippedItem || equippedItem.type !== 'wallet')) {
      console.log('Item is collected and no wallet equipped, stopping');
      console.groupEnd();
      return;
    }

    if (isButton) {
      console.log('Handling button behavior');
      if (e?.type === 'contextmenu') {
        if (equippedItem) {
          setShowSwapModal(true);
        } else {
          dispatch(equipItem(itemConfig));
        }
      } else {
        onButtonClick(e);
      }
      console.groupEnd();
      return;
    }

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

    console.groupEnd();
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

      {useBaseCollection && (
        <ConfirmationModal
          show={showSwapModal}
          onConfirm={handleConfirmSwap}
          onCancel={() => setShowSwapModal(false)}
          itemName={equippedItem?.name || 'current item'}
          message={`Picking up the ${itemConfig.name} will return your ${equippedItem?.name || 'current item'} to its original location. Continue?`}
        />
      )}
    </>
  );
};

export default BaseCollectable; 