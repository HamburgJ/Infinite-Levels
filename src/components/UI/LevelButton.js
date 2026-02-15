import React, { useMemo, useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { setCurrentLevel } from '../../store';
import { equipItem, unequipItem } from '../../store/slices/inventorySlice';
import { isItemAvailable } from '../../utils/itemLocation';
import { levelToString } from '../../utils/complex';
import { hashString } from '../../utils/hash';
import { colors, fonts, radii, transitions, shadows } from '../../styles/theme';

const StyledButton = styled.button`
  /* Base style — replaces Bootstrap btn-primary */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4em;
  font-family: ${fonts.mono};
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: #fff;
  background: ${colors.primary};
  border: 1px solid ${colors.primaryHover};
  border-radius: ${radii.sm};
  padding: ${props => props.$isDigitalScreen ? '0 15px' : '0.5rem 1.4rem'};
  margin: ${props => props.$isDigitalScreen ? '0' : '0.6rem 0.6rem'};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  transition: 
    transform ${transitions.fast},
    background ${transitions.fast},
    box-shadow ${transitions.fast};
  opacity: ${props => props.$isCollected ? 0.5 : 1};

  /* Subtle inner shine */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.12) 0%,
      rgba(255, 255, 255, 0) 50%
    );
    pointer-events: none;
    border-radius: inherit;
  }

  &:hover {
    background: ${colors.primaryHover};
    box-shadow: ${shadows.glow};
    transform: ${props => !props.$isCollected && !props.$isDigitalScreen ? 'translateY(-1px)' : 'none'};
  }

  &:active {
    background: ${colors.primaryActive};
    transform: ${props => !props.$isCollected && !props.$isDigitalScreen ? 'translateY(0) scale(0.98)' : 'none'};
    box-shadow: none;
  }

  &:disabled {
    opacity: 1;
    cursor: pointer;
  }

  /* Digital screen variant */
  ${props => props.$isDigitalScreen && css`
    width: 240px;
    height: 40px;
    background: #0a0a0a;
    border: 1px solid #222;
    border-radius: ${radii.md};
    justify-content: flex-end;
    font-family: 'Digital', ${fonts.mono};
    color: #00ff00;
    font-size: 24px;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5);

    &::before { display: none; }

    &:hover, &:active, &:focus {
      background: #1a1a1a;
      box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5);
      transform: none;
    }
  `}
`;

const LevelButton = ({ 
  targetLevel, 
  children, 
  variant = 'primary',
  className = '',
  disabled = false,
  isDigitalScreen = false,
  onClick = null
}) => {
  const dispatch = useDispatch();
  const currentLevel = useSelector(state => state.game.currentLevel);
  const sourceLevel = levelToString(currentLevel);
  const displayText = children || `Level ${targetLevel}`; 
  
  const buttonId = `button-${hashString(`${sourceLevel}-${targetLevel}-${displayText}`)}`;

  const equippedItem = useSelector(state => state.inventory.equippedItem);
  const isCollected = !useSelector(state => isItemAvailable(state, buttonId));

  const buttonConfig = {
    type: 'levelButton',
    value: targetLevel,
    variant,
    id: buttonId,
    name: `Level ${targetLevel} Button`,
    displayText,
    isDigitalScreen
    };

  const handleClick = (e) => {
    if (isCollected) {
      if (equippedItem?.id === buttonId) {
        dispatch(unequipItem());
      }
    } else {
      console.log('targetLevel', targetLevel);
      dispatch(setCurrentLevel(targetLevel.real === 'Infinity' ? 'Infinity' : targetLevel));
    }
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    if (!isCollected && !disabled && !equippedItem) {
      dispatch(equipItem(buttonConfig));
    }
  };

  return (
    <StyledButton
      className={className}
      onClick={onClick || handleClick}
      onContextMenu={handleRightClick}
      disabled={disabled}
      $isCollected={isCollected}
      data-button-id={buttonId}
      $isDigitalScreen={isDigitalScreen}
    >
      {displayText}
    </StyledButton>
  );
};

export default LevelButton;