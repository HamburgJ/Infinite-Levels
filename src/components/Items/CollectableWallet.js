import React from 'react';
import { FaWallet } from 'react-icons/fa';
import BaseCollectable from './BaseCollectable';
import { CollectableContainer, BaseItem } from './SharedStyles';
import { useDispatch, useSelector } from 'react-redux';
import { addToWallet, equipItem, unequipItem } from '../../store/slices/inventorySlice';
import { useAchievements } from '../../hooks/useAchievements';

const CollectableWallet = ({ forceAvailable = false, isInventory = false, isStorage = false }) => {
  const dispatch = useDispatch();
  const { unlockAchievement } = useAchievements();
  const equippedItem = useSelector(state => state.inventory.equippedItem);

  const itemConfig = {
    type: 'wallet',
    id: 'wallet-1',
    name: 'Money Wallet'
  };

  const handleClick = (e) => {
    const isRightClick = e?.type === 'contextmenu';
    if (isRightClick) {
      e.preventDefault();
    }
    if (isInventory) {
      return;
    }
    if (isStorage) {
      if (equippedItem?.type === 'currency') {
        dispatch(addToWallet({ 
          value: equippedItem.value
        }));
      }
      dispatch(equipItem({
        ...itemConfig,
        fromStorage: true
      }));
      return;
    }

    if (equippedItem?.type === 'currency') {
      dispatch(addToWallet({ 
        value: equippedItem.value
      }));
      dispatch(equipItem({
        ...itemConfig,
        fromStorage: isStorage
      }));
      unlockAchievement('WALLET_FOUND');
    } else if (equippedItem?.type === 'wallet') {
      dispatch(unequipItem());
    } else if (equippedItem === null) {
      dispatch(equipItem({
        ...itemConfig,
        fromStorage: isStorage
      }));
      unlockAchievement('WALLET_FOUND');
    }
  };

  return (
    <BaseCollectable
      itemConfig={itemConfig}
      isButton={false}
      renderItem={({ collected }) => (
        <CollectableContainer>
          <BaseItem 
            collected={forceAvailable ? false : collected}
            onClick={handleClick}
            onContextMenu={handleClick}
          >
            <FaWallet />
          </BaseItem>
        </CollectableContainer>
      )}
    />
  );
};

export default CollectableWallet; 