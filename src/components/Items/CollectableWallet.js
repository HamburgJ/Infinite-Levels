import React from 'react';
import { FaWallet } from 'react-icons/fa';
import BaseCollectable from './BaseCollectable';
import { CollectableContainer, BaseItem } from './SharedStyles';
import { useDispatch, useSelector } from 'react-redux';
import { addMoneyToWallet, equipItem } from '../../store/slices/inventorySlice';

const CollectableWallet = () => {
  const dispatch = useDispatch();
  const equippedItem = useSelector(state => state.inventory.equippedItem);

  const itemConfig = {
    type: 'wallet',
    id: 'wallet-1',
    name: 'Money Wallet'
  };

  const handleBeforeCollect = (equippedItem) => {
    if (equippedItem?.type === 'currency') {
      dispatch(addMoneyToWallet({ 
        value: equippedItem.value, 
        id: equippedItem.id 
      }));
      dispatch(equipItem(itemConfig));
      return false;
    }
    return true;
  };

  return (
    <BaseCollectable
      itemConfig={itemConfig}
      onBeforeCollect={handleBeforeCollect}
      renderItem={({ collected, handleCollect }) => (
        <CollectableContainer>
          <BaseItem collected={collected} onClick={handleCollect}>
            <FaWallet />
          </BaseItem>
        </CollectableContainer>
      )}
    />
  );
};

export default CollectableWallet; 