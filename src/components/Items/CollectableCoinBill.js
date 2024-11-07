import React from 'react';
import styled from 'styled-components';
import BaseCollectable from './BaseCollectable';
import { useDispatch, useSelector } from 'react-redux';
import { addMoneyToWallet, equipItem } from '../../store/slices/inventorySlice';
import WalletSystem from '../../systems/WalletSystem';
import { setCurrentLevel } from '../../store';
import { isItemAvailable } from '../../utils/itemLocation';

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
  pointer-events: ${props => props.collected ? 'none' : 'auto'};
  transition: transform 0.3s ease;
  font-weight: bold;
  position: relative;

  &:hover {
    transform: ${props => props.collected ? 'none' : 'scale(1.1)'};
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

const CollectableCoinBill = ({ value, id }) => {
  const dispatch = useDispatch();
  const equippedItem = useSelector(state => state.inventory.equippedItem);
  const money = useSelector(state => state.inventory.money);
  const isAvailable = useSelector(state => isItemAvailable(state, id));
  
  const itemConfig = {
    type: 'currency',
    id: id || `currency-${value}`,
    name: value >= 500 ? `$${value/100} Bill` : `${value}¢ Coin`,
    value
  };

  // Check if this specific coin/bill is in the wallet
  const isCollected = money.some(m => m.id === itemConfig.id) || !isAvailable;

  const handleBeforeCollect = (equippedItem) => {
    if (equippedItem?.type === 'wallet') {
      dispatch(addMoneyToWallet({ value, id: itemConfig.id }));
      return false;
    }
    
    // If no wallet equipped, go to the level
    const levelValue = value >= 500 ? value / 100 : value;
    dispatch(setCurrentLevel(levelValue));
    return false;
  };

  const CurrencyComponent = value >= 500 ? Bill : Coin;
  const displayValue = value >= 500 ? `$${value/100}` : `${value}¢`;

  return (
    <BaseCollectable
      itemConfig={itemConfig}
      onBeforeCollect={handleBeforeCollect}
      renderItem={({ handleCollect }) => (
        <CurrencyContainer>
          <CurrencyComponent 
            collected={isCollected} 
            onClick={handleCollect}
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