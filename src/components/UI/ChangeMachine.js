import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { removeMoneyFromWallet, addMoneyToWallet } from '../../store/slices/inventorySlice';
import MoneyDisplay from './MoneyDisplay';
import { generateUniqueId } from '../../utils/idGenerator';

const MachineContainer = styled.div`
  padding: 1.5rem;
  border: 2px solid #ccc;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.95);
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h3`
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
`;

const ExchangeLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: start;
`;

const ExchangeSection = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.8);
`;

const SectionTitle = styled.h4`
  text-align: center;
  margin-bottom: 1rem;
  color: #666;
  font-size: 1rem;
`;

const ActionButton = styled.button`
  padding: 0.8rem 1.5rem;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.1rem;
  margin: 1rem auto;
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  display: block;
  height: 3.5rem;
  min-width: 200px;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const QuantitySelector = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border: 2px solid #4CAF50;
  border-radius: 8px;
  padding: 0.3rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  z-index: 100;
  scale: 0.8;
`;

const QuantityButton = styled.button`
  background: none;
  border: none;
  color: #4CAF50;
  font-size: 1rem;
  cursor: pointer;
  padding: 0.1rem 0.3rem;

  &:hover {
    background: rgba(76, 175, 80, 0.1);
    border-radius: 4px;
  }
`;

const QuantityInput = styled.input`
  width: 30px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0.1rem;
  font-size: 0.9rem;
`;

const BrokeMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: #666;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const SadFace = styled.span`
  font-size: 2rem;
`;

const ChangeMachine = () => {
  const dispatch = useDispatch();
  const [selectedItems, setSelectedItems] = useState([]);
  const [availableMoney, setAvailableMoney] = useState(new Map());
  const equippedItem = useSelector(state => state.inventory.equippedItem);
  const money = useSelector(state => state.inventory.money);
  const hasWallet = equippedItem?.type === 'wallet';
  const coinSlots = useSelector(state => state.inventory.coinSlots);

  const handleMoneyMapUpdate = (moneyMap) => {
    setAvailableMoney(moneyMap);
  };

  const handleItemClick = (item) => {
    setSelectedItems(prev => {
      const existingItem = prev.find(i => i.value === item.value);
      if (existingItem) {
        return prev.filter(i => i.value !== item.value);
      }
      return [...prev, { ...item, count: 1 }];
    });
  };

  const handleQuantityChange = (value, count, isDecrementing = false) => {
    console.log('handleQuantityChange called with:', { value, count, isDecrementing });
    console.log('Current selectedItems:', selectedItems);
    
    if (isDecrementing && count < 1) {
      console.log('Clearing selection for value:', value);
      setSelectedItems(prev => prev.filter(item => item.value !== value));
      return;
    }
    
    if (count <= 0 || count === undefined) {
      console.log('Clearing selection for value:', value);
      setSelectedItems(prev => prev.filter(item => item.value !== value));
    } else {
      setSelectedItems(prev => 
        prev.map(item => 
          item.value === value 
            ? { ...item, count: Math.min(count, availableMoney.get(value) || 0) }
            : item
        )
      );
    }
  };

  const calculateOptimalExchange = () => {
    if (selectedItems.length === 0) return [];

    const total = selectedItems.reduce((sum, item) => 
      sum + (item.value * (item.count || 1)), 0);
    
    const denominations = [10000, 5000, 2000, 1000, 500, 25, 10, 5, 1];

    // Case 1: Single item (quantity = 1)
    if (selectedItems.length === 1 && selectedItems[0].count === 1) {
      const item = selectedItems[0];
      
      // Don't allow penny exchanges
      if (item.value === 1) {
        return [];
      }

      // Find all denominations smaller than our input value
      const smallerDenoms = denominations.filter(d => d < item.value);
      
      // Try each smaller denomination
      for (const denom of smallerDenoms) {
        const result = [];
        let remaining = item.value;
        
        while (remaining >= denom) {
          result.push({ value: denom });
          remaining -= denom;
        }
        
        // Must make exact change with multiple smaller coins
        if (remaining === 0 && result.length > 1) {
          return result;
        }
      }
      return [];
    }

    // Case 2: Multiple items (including multiple of same type)
    // Must combine into a single larger denomination
    const largerDenom = denominations.find(d => d === total);
    if (largerDenom) {
      return [{ value: largerDenom }];
    }

    return [];
  };

  const handleExchange = () => {
    if (selectedItems.length === 0) return;

    console.log('=== Starting Exchange ===');
    console.log('Selected Items:', selectedItems);
    console.log('Current Money:', money);
    console.log('Coin Slots:', coinSlots);

    // Remove selected items with their counts
    selectedItems.forEach(item => {
      const count = item.count || 1;
      console.log(`\nProcessing item: value=${item.value}, count=${count}`);
      
      // Find all matching money items from the wallet
      const matchingMoney = money.filter(m => m.value === item.value);
      console.log('Matching money in wallet:', matchingMoney);
      
      // First, try to use coins that aren't in slots
      const freeCoins = matchingMoney.filter(m => !Object.values(coinSlots).includes(m.id));
      const slotsCoins = matchingMoney.filter(m => Object.values(coinSlots).includes(m.id));
      console.log('Free coins:', freeCoins);
      console.log('Coins in slots:', slotsCoins);
      
      // Calculate how many free coins we can use
      const freeCoinsToUse = Math.min(count, freeCoins.length);
      console.log('Free coins to use:', freeCoinsToUse);
      
      // Remove free coins first
      for (let i = 0; i < freeCoinsToUse; i++) {
        console.log('Removing free coin:', freeCoins[i]);
        dispatch(removeMoneyFromWallet({
          id: freeCoins[i].id
        }));
      }
      
      // If we still need more coins, use the ones in slots
      const remainingCount = count - freeCoinsToUse;
      console.log('Remaining count needed:', remainingCount);
      
      if (remainingCount > 0) {
        console.log('Need to use coins from slots');
        for (let i = 0; i < remainingCount && i < slotsCoins.length; i++) {
          const slotId = Object.keys(coinSlots).find(key => coinSlots[key] === slotsCoins[i].id);
          console.log('Removing coin from slot:', { coin: slotsCoins[i], slotId });
          dispatch(removeMoneyFromWallet({
            id: slotsCoins[i].id,
            slotId
          }));
        }
      }
    });

    // Add new denominations
    const newDenominations = calculateOptimalExchange();
    console.log('\nAdding new denominations:', newDenominations);
    
    newDenominations.forEach(item => {
      const newId = generateUniqueId('money');
      console.log('Adding new coin:', { value: item.value, id: newId });
      dispatch(addMoneyToWallet({
        value: item.value,
        id: newId
      }));
    });

    console.log('=== Exchange Complete ===');
    // Reset all selections after exchange
    setSelectedItems([]);
  };

  const canExchange = calculateOptimalExchange().length > 0;
  const exchangeResult = canExchange ? calculateOptimalExchange() : [];

  return (
    <>
      <ExchangeLayout>
        <ExchangeSection>
          <SectionTitle>Your Money</SectionTitle>
          {hasWallet ? (
            <MoneyDisplay 
              selectable={true}
              selectedItems={selectedItems}
              onItemClick={handleItemClick}
              onStackCountChange={handleQuantityChange}
              onMoneyMapUpdate={handleMoneyMapUpdate}
              scale={0.7}
              showQuantitySelectors={true}
              availableMoney={availableMoney}
            />
          ) : (
            <BrokeMessage>
              No wallet equipped
            </BrokeMessage>
          )}
        </ExchangeSection>
        <ExchangeSection>
          <SectionTitle>You Will Receive</SectionTitle>
          <MoneyDisplay 
            items={exchangeResult}
            scale={0.7}
          />
        </ExchangeSection>
      </ExchangeLayout>
      <ActionButton 
        show={canExchange}
        onClick={handleExchange}
      >
        Make Exchange
      </ActionButton>
    </>
  );
};

export default ChangeMachine;