import React, { useMemo, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import HighlightableText from './HighlightableText';

const MoneyGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${props => props.scale ? `${props.scale}rem` : '1rem'};
  padding: ${props => props.scale ? `${props.scale}rem` : '1rem'};
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  transform: scale(${props => props.scale || 1});
  transform-origin: top center;
`;

const MoneyStack = styled.div`
  position: relative;
  aspect-ratio: 1;
  width: 100%;
  transform-style: preserve-3d;
`;

const MoneyItem = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;
  transform: translateY(${props => props.stackIndex * -2}px);
`;

const MoneyOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: ${props => props.isActive ? 'auto' : 'none'};
  z-index: ${props => props.isActive ? 1000 : -1};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const QuantitySelector = styled.div`
  background: white;
  border: 2px solid #4CAF50;
  border-radius: 8px;
  padding: 0.3rem;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  white-space: nowrap;
  scale: 0.8;
  margin-top: 3rem;
`;

const MoneyContent = styled.div`
  width: ${props => {
    if (props.type === 'bill') return '100%';
    switch (props.denomination) {
      case 25: return '85%';
      case 5: return '75%';
      case 1: return '70%';
      case 10: return '65%';
      default: return '100%';
    }
  }};
  height: ${props => props.type === 'bill' ? '50%' : 'auto'};
  aspect-ratio: ${props => props.type === 'bill' ? '2/1' : '1/1'};
  background: ${props => {
    if (props.type === 'bill') return '#85bb65';
    switch (props.denomination) {
      case 1: return '#b87333';
      case 5:
      case 10:
      case 25: return '#a8a9ad';
      default: return '#ffd700';
    }
  }};
  border-radius: ${props => props.type === 'coin' ? '50%' : '8px'};
  color: ${props => props.type === 'bill' ? 'white' : '#000'};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  border: ${props => props.selected ? '3px solid #4CAF50' : props.type === 'coin' ? 
    `6px solid ${
      props.denomination === 1 ? '#8b4513' : 
      '#606060'
    }` : 
    '3px solid #2e7d32'
  };
  cursor: ${props => props.selectable ? 'pointer' : 'default'};
`;

const StackCount = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  background: #4CAF50;
  color: white;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: bold;
  border: 2px solid white;
  z-index: 1;
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
  
  /* Remove spinner buttons for Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Remove spinner buttons for Firefox */
  &[type=number] {
    -moz-appearance: textfield;
  }
`;

const MoneyDisplay = ({ 
  selectable = false, 
  selectedItems = [], 
  onItemClick = null,
  items = null,
  scale = 1,
  onStackCountChange = null,
  onMoneyMapUpdate = null,
  showQuantitySelectors = false,
  availableMoney = null
}) => {
  const money = useSelector(state => state.inventory.money);
  const displayItems = items || money;

  const denominations = [10000, 5000, 2000, 1000, 500, 100, 25, 10, 5, 1];

  const moneyMap = useMemo(() => {
    const map = new Map();
    displayItems.forEach(item => {
      const count = map.get(item.value) || 0;
      map.set(item.value, count + 1);
    });
    return map;
  }, [displayItems]);

  useEffect(() => {
    onMoneyMapUpdate?.(moneyMap);
  }, [moneyMap, onMoneyMapUpdate]);

  const handleStackClick = (denom, count) => {
    if (!selectable || !onItemClick) return;
    onItemClick({ value: denom, count });
  };

  return (
    <MoneyGrid scale={scale}>
      {denominations.map(denom => {
        const count = moneyMap.get(denom) || 0;
        if (count === 0) return null;

        const isSelected = selectedItems.some(item => item.value === denom);
        const selectedItem = selectedItems.find(item => item.value === denom);

        return (
          <MoneyStack key={denom}>
            {[...Array(Math.min(3, count))].map((_, index) => (
              <MoneyItem
                key={index}
                stackIndex={index}
              >
                <MoneyContent
                  type={denom >= 100 ? 'bill' : 'coin'}
                  denomination={denom}
                  selected={isSelected}
                  selectable={selectable}
                  onClick={() => selectable && handleStackClick(denom, count)}
                >
                  {denom >= 100 ? `$${denom / 100}` : `${denom}¢`}
                </MoneyContent>
              </MoneyItem>
            ))}
            <MoneyOverlay isActive={isSelected}>
              {showQuantitySelectors && isSelected && count > 1 && (
                <QuantitySelector>
                  <QuantityButton onClick={(e) => {
                    e.stopPropagation();
                    onStackCountChange(denom, Math.max(1, selectedItem.count - 1), true);
                  }}>
                    -
                  </QuantityButton>
                  <QuantityInput
                    type="number"
                    value={selectedItem.count}
                    onChange={(e) => {
                      e.stopPropagation();
                      onStackCountChange(denom, parseInt(e.target.value) || 1);
                    }}
                    min="1"
                    max={availableMoney?.get(denom) || count}
                    onClick={e => e.stopPropagation()}
                  />
                  <QuantityButton onClick={(e) => {
                    e.stopPropagation();
                    onStackCountChange(denom, selectedItem.count + 1);
                  }}>
                    +
                  </QuantityButton>
                </QuantitySelector>
              )}
            </MoneyOverlay>
            {count > 1 && (
              <StackCount>
                <HighlightableText text={count.toString()} inherit={true} />
              </StackCount>
            )}
          </MoneyStack>
        );
      })}
    </MoneyGrid>
  );
};

export default MoneyDisplay;