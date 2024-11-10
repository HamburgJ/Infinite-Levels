import React, { useState, useEffect, useMemo } from 'react';
import styled, { keyframes } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWallet, equipItem } from '../../store';
import { CollectibleLevelButton } from './SharedStyles';

const fallAnimation = keyframes`
  0% {
    transform: translateY(-200px) rotate(0deg);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(0) rotate(360deg);
    opacity: 1;
  }
`;

const floatAnimation = keyframes`
  0%, 100% { transform: translateY(0px) rotate(3deg); }
  50% { transform: translateY(-10px) rotate(-3deg); }
`;

const BUTTON_COLORS = {
  common_blue: {
    bg: '#4287f5',
    border: '#2563eb'
  },
  common_green: {
    bg: '#22c55e',
    border: '#16a34a'
  },
  common_red: {
    bg: '#ef4444',
    border: '#dc2626'
  },
  common_orange: {
    bg: '#f97316',
    border: '#ea580c'
  },
  common_teal: {
    bg: '#06b6d4',
    border: '#0891b2'
  },
  common_pink: {
    bg: '#ec4899',
    border: '#db2777'
  },
  uncommon: {
    bg: '#22c55e',
    border: '#16a34a'
  },
  rare: {
    bg: '#ef4444',
    border: '#dc2626'
  },
  epic: {
    bg: '#a855f7',
    border: '#9333ea'
  },
  legendary: {
    bg: '#fbbf24',
    border: '#f59e0b'
  }
};

const MachineContainer = styled.div`
  width: 300px;
  height: 450px;
  position: relative;
  margin: 0 auto;
`;

const GlassDome = styled.div`
  width: 260px;
  height: 260px;
  background: rgba(255, 255, 255, 0.9);
  border: 12px solid #ff6b6b;
  border-radius: 50%;
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  box-shadow: inset 0 0 30px rgba(0,0,0,0.15);
  z-index: 2;
`;

const ButtonsContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const FloatingButton = styled(CollectibleLevelButton)`
  animation: ${floatAnimation} ${props => 2 + Math.random() * 2}s infinite ease-in-out;
  animation-delay: ${props => Math.random() * -2}s;
  transform-origin: center;
  scale: 0.7;
  border-radius: 12px;
  opacity: 1;
  pointer-events: none;
  background: ${props => {
    if (props.rarity.startsWith('common_')) {
      return BUTTON_COLORS[props.rarity].bg;
    }
    return BUTTON_COLORS.common_blue.bg;
  }};
  border: 3px solid ${props => {
    if (props.rarity.startsWith('common_')) {
      return BUTTON_COLORS[props.rarity].border;
    }
    return BUTTON_COLORS.common_blue.border;
  }};
`;

const Base = styled.div`
  width: 200px;
  height: 180px;
  background: #ff6b6b;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 20px;
  z-index: 1;
`;

const CoinSlot = styled.div`
  width: 40px;
  height: 8px;
  background: #444;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const Chute = styled.div`
  width: 100px;
  height: 80px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 2px 10px rgba(0,0,0,0.3);
`;

const ButtonDisplay = styled(CollectibleLevelButton)`
  animation: ${props => props.falling ? fallAnimation : 'none'} 1s ease-out;
  position: relative;
  scale: 0.8;
  z-index: 10;
  cursor: ${props => props.isCollectable ? 'pointer' : 'default'};
  pointer-events: ${props => props.isCollectable ? 'auto' : 'none'};
`;

const InsertButton = styled.button`
  background: #ffd700;
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  color: #333;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const FloatingButtonMemo = React.memo(({ value, rarity, style }) => {
  return (
    <FloatingButton
      rarity={rarity}
      style={style}
    >
      {value}
    </FloatingButton>
  );
});

const GamblingMachine = () => {
  const dispatch = useDispatch();
  const [currentButton, setCurrentButton] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [buttonInChute, setButtonInChute] = useState(null);
  const walletDenominations = useSelector(state => state.inventory.walletDenominations);
  const equippedItem = useSelector(state => state.inventory.equippedItem);
  const hasWallet = equippedItem?.type === 'wallet';
  const hasQuarters = walletDenominations[25] > 0;

  const dummyButtons = [
    { value: 5, variant: 'primary', weight: 1 },
    { value: 15, variant: 'success', weight: 1 },
    { value: 25, variant: 'danger', weight: 1 },
    { value: 42, variant: 'warning', weight: 0.7 },
    { value: 88, variant: 'info', weight: 0.7 },
    { value: 100, variant: 'danger', weight: 0.5 },
    { value: 123, variant: 'warning', weight: 0.3 },
    { value: 256, variant: 'info', weight: 0.2 },
    { value: 404, variant: 'danger', weight: 0.1 },
    { value: 500, variant: 'success', weight: 0.05 }
  ];

  const generateButton = () => {
    const rand = Math.random();
    if (rand < 0.4) return { value: Math.floor(Math.random() * 9) + 1, variant: 'primary' };
    if (rand < 0.7) return { value: Math.floor(Math.random() * 20) + 10, variant: 'success' };
    if (rand < 0.85) return { value: Math.floor(Math.random() * 30) + 30, variant: 'warning' };
    if (rand < 0.95) return { value: Math.floor(Math.random() * 50) + 80, variant: 'danger' };
    if (rand < 0.98) return { value: Math.floor(Math.random() * 100) + 200, variant: 'info' };
    return { value: Math.floor(Math.random() * 200) + 300, variant: 'danger' };
  };

  const handleInsert = () => {
    if (buttonInChute) {
      dispatch(equipItem({
        type: 'levelButton',
        ...buttonInChute
      }));
      setButtonInChute(null);
      return;
    }

    dispatch(removeFromWallet({
      value: 25,
      amount: 1
    }));
    
    setIsAnimating(true);
    const newButton = generateButton();
    setCurrentButton(newButton);
    
    setTimeout(() => {
      setIsAnimating(false);
      setButtonInChute(newButton);
      setCurrentButton(null);
    }, 1000);
  };

  const getRarityForValue = (value) => {
    // Randomly select a common color variant
    const commonColors = ['common_blue', 'common_green', 'common_red', 'common_orange', 'common_teal', 'common_pink'];
    return commonColors[Math.floor(Math.random() * commonColors.length)];
  };

  const renderFloatingButtons = useMemo(() => {
    const buttons = [];
    const numButtons = 50;
    
    for (let i = 0; i < numButtons; i++) {
      const randomButton = dummyButtons[Math.floor(Math.random() * dummyButtons.length)];
      const rarity = getRarityForValue(randomButton.value);
      const style = {
        position: 'absolute',
        left: `${Math.random() * 85}%`,
        top: `${Math.random() * 85}%`,
      };
      
      buttons.push(
        <FloatingButtonMemo
          key={i}
          value={randomButton.value}
          rarity={rarity}
          style={style}
        />
      );
    }
    return buttons;
  }, []);

  return (
    <MachineContainer>
      <GlassDome>
        <ButtonsContainer>
          {renderFloatingButtons}
        </ButtonsContainer>
      </GlassDome>
      <Base>
        <Chute>
          {(currentButton || buttonInChute) && (
            <ButtonDisplay 
              falling={isAnimating}
              variant={currentButton?.variant || buttonInChute?.variant}
              isCollectable={!!buttonInChute}
            >
              {currentButton?.value || buttonInChute?.value}
            </ButtonDisplay>
          )}
        </Chute>
        <CoinSlot />
        <InsertButton 
          onClick={handleInsert}
          disabled={(!hasWallet || !hasQuarters) && !buttonInChute}
        >
          {buttonInChute ? 'Collect Button' : 'Insert 25¢'}
        </InsertButton>
      </Base>
    </MachineContainer>
  );
};

export default GamblingMachine;