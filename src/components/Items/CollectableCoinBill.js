import React from 'react';
import styled from 'styled-components';
import BaseCollectable from './BaseCollectable';
import { useDispatch, useSelector } from 'react-redux';
import { rightClickCoin, leftClickCoin, addToWallet } from '../../store/slices/inventorySlice';
import { setCurrentLevel } from '../../store';
import { isItemAvailable } from '../../utils/itemLocation';
import { useAchievements } from '../../hooks/useAchievements';
import { generateUniqueId } from '../../utils/idGenerator';

const CurrencyContainer = styled.div`
  text-align: center;
  margin: 2rem 0;
`;

const BaseCurrency = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: ${props => props.collected ? 0.5 : 1};
  transition: transform 0.3s ease;
  font-weight: bold;
  position: relative;

  &:hover {
    transform: scale(1.1);
  }
`;

const Coin = styled(BaseCurrency)`
  width: ${props => props.value >= 25 ? '3rem' : '2.5rem'};
  height: ${props => props.value >= 25 ? '3rem' : '2.5rem'};
  border-radius: 50%;
  background: ${props => {
    switch (props.value) {
      case 25: return 'linear-gradient(135deg, #C0C0C0, #E8E8E8)';
      case 10: return 'linear-gradient(135deg, #CD7F32, #E6B17F)';
      case 5: return 'linear-gradient(135deg, #CD7F32, #E6B17F)';
      default: return 'linear-gradient(135deg, #CD7F32, #E6B17F)';
    }
  }};
  border: 2px solid ${props => {
    switch (props.value) {
      case 25: return '#A0A0A0';
      case 10: return '#8B4513';
      case 5: return '#8B4513';
      default: return '#8B4513';
    }
  }};
  color: ${props => props.value >= 25 ? '#404040' : '#663300'};
  font-size: ${props => props.value >= 25 ? '1.2rem' : '1rem'};
`;

const Bill = styled(BaseCurrency)`
  width: 4.5rem;
  height: 2.5rem;
  border-radius: 4px;
  background: ${props => {
    switch (props.value) {
      case 10000: return 'linear-gradient(135deg, #849F84, #C1D9C1)';
      case 5000: return 'linear-gradient(135deg, #E68A00, #FFB84D)';
      case 2000: return 'linear-gradient(135deg, #008055, #00B377)';
      case 1000: return 'linear-gradient(135deg, #666699, #8585AD)';
      default: return 'linear-gradient(135deg, #85AD85, #B3D1B3)';
    }
  }};
  border: 2px solid ${props => {
    switch (props.value) {
      case 10000: return '#5C705C';
      case 5000: return '#B36B00';
      case 2000: return '#004D33';
      case 1000: return '#40406B';
      default: return '#5C705C';
    }
  }};
  color: #FFF;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
  font-size: 1.1rem;
`;

const CollectableCoinBill = ({ value, id, forceAvailable = false, isInventory = false, isStorage = false }) => {
    const dispatch = useDispatch();
    const { unlockAchievement } = useAchievements();
    const equippedItem = useSelector(state => state.inventory.equippedItem);
    const walletDenominations = useSelector(state => state.inventory.walletDenominations);
    const isCollected = useSelector(state => 
        state.inventory.collectedCoinBills ? id in state.inventory.collectedCoinBills : false   
    );

    // Always show as available (not dimmed) if in inventory
    const effectiveIsCollected = isInventory ? false : (forceAvailable ? false : isCollected);

    const itemConfig = {
        type: 'currency',
        id,
        name: value >= 500 ? `$${value/100} Bill` : `${value}¢ Coin`,
        value
    };

    const handleClick = (e) => {
        const isRightClick = e?.type === 'contextmenu';
        
        console.log('CollectableCoinBill - Click Event:', {
          isRightClick,
          isStorage,
          isInventory,
          id,
          value,
          equippedItem,
          isCollected
        });
        
        if (isInventory || isStorage) {
            if (isRightClick) {
                e.preventDefault();
                dispatch(rightClickCoin({ 
                    value, 
                    collectableCoinBillId: id,
                    fromStorage: isStorage,
                    fromInventory: isInventory
                }));
            } else {
                const levelValue = value >= 500 ? value / 100 : value;
                unlockAchievement('COIN_TRAVEL');
                dispatch(setCurrentLevel(levelValue));
            }
            return;
        }

        // Regular collectible behavior
        if (isRightClick) {
            e.preventDefault();
            dispatch(rightClickCoin({ 
                value, 
                collectableCoinBillId: id
            }));
        } else {
            if (isCollected) {
                dispatch(leftClickCoin({ 
                    value, 
                    collectableCoinBillId: id
                }));
                return;
            }
            const levelValue = value >= 500 ? value / 100 : value;
            unlockAchievement('COIN_TRAVEL');
            dispatch(setCurrentLevel(levelValue));
        }
    };

    const CurrencyComponent = value >= 500 ? Bill : Coin;
    const displayValue = value >= 500 ? `$${value/100}` : `${value}¢`;
  
    return (
      <BaseCollectable
        itemConfig={itemConfig}
        useBaseCollection={false}
        renderItem={({ collected }) => (
          <CurrencyContainer>
            <CurrencyComponent 
              collected={effectiveIsCollected}
              onClick={handleClick}
              onContextMenu={handleClick}
              value={value}
            >
              {displayValue}
            </CurrencyComponent>
          </CurrencyContainer>
        )}
      />
    );
};
  
  export default CollectableCoinBill;