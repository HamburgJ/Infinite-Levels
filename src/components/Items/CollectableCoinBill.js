import React, { useState } from 'react';
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
      case 5: return 'linear-gradient(135deg, #C0C0C0, #E8E8E8)';
      default: return 'linear-gradient(135deg, #CD7F32, #E6B17F)';
    }
  }};
  border: 2px solid ${props => {
    switch (props.value) {
      case 25: return '#A0A0A0';
      case 10: return '#8B4513';
      case 5: return '#A0A0A0';
      default: return '#8B4513';
    }
  }};
  color: ${props => props.value >= 5 ? '#404040' : '#663300'};
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

const CoinTooltip = styled.div`
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.85);
  color: white;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  font-size: 0.75rem;
  white-space: nowrap;
  z-index: 10;
  pointer-events: none;
  animation: fadeInTooltip 0.3s ease-out;

  @keyframes fadeInTooltip {
    from { opacity: 0; transform: translateX(-50%) translateY(4px); }
    to { opacity: 1; transform: translateX(-50%) translateY(0); }
  }

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 5px solid transparent;
    border-top-color: rgba(0, 0, 0, 0.85);
  }
`;

const CollectableCoinBill = ({ value, id, forceAvailable = false, isInventory = false, isStorage = false }) => {
    const dispatch = useDispatch();
    const { unlockAchievement } = useAchievements();
    const equippedItem = useSelector(state => state.inventory.equippedItem);
    const walletDenominations = useSelector(state => state.inventory.walletDenominations);
    const hasWallet = equippedItem?.type === 'wallet';
    const isCollected = useSelector(state => 
        state.inventory.collectedCoinBills ? id in state.inventory.collectedCoinBills : false   
    );
    const [showConfirm, setShowConfirm] = useState(false);
    const [pendingClick, setPendingClick] = useState(null);

    // Always show as available (not dimmed) if in inventory
    const effectiveIsCollected = isInventory ? false : (forceAvailable ? false : isCollected);

    const itemConfig = {
        type: 'currency',
        id,
        name: value >= 500 ? `$${value/100} Bill` : `${value}¢ Coin`,
        value
    };

    const performCoinTravel = (e) => {
        const isRightClick = e?.type === 'contextmenu';
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

    const handleClick = (e) => {
        const isRightClick = e?.type === 'contextmenu';
        
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

        // First-click confirmation for coins without wallet (non-right-click)
        if (!isRightClick && !isCollected && !hasWallet && !showConfirm) {
            setShowConfirm(true);
            setPendingClick(e);
            // Auto-dismiss after 3 seconds
            setTimeout(() => setShowConfirm(false), 3000);
            return;
        }

        // If confirming, perform the travel
        if (showConfirm) {
            setShowConfirm(false);
        }

        performCoinTravel(e);
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
              {showConfirm && (
                <CoinTooltip>
                  ⚠️ This will transport you to Level {value >= 500 ? value/100 : value}! Click again to go.
                </CoinTooltip>
              )}
            </CurrencyComponent>
          </CurrencyContainer>
        )}
      />
    );
};
  
  export default CollectableCoinBill;