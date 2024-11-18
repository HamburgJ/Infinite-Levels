import React, { useMemo, useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { setCurrentLevel } from '../../store';
import { equipItem, unequipItem } from '../../store/slices/inventorySlice';
import { isItemAvailable } from '../../utils/itemLocation';
import { levelToString } from '../../utils/complex';
import { hashString } from '../../utils/hash';

const StyledButton = styled(Button)`
  margin: ${props => props.$isDigitalScreen ? '0' : '1rem 1rem'};
  padding: ${props => props.$isDigitalScreen ? '0 15px' : '0.5rem 1.5rem'};
  transition: ${props => props.$isDigitalScreen ? 'background-color 0.2s' : 'transform 0.2s'};
  opacity: ${props => props.isCollected ? 0.5 : 1};
  pointer-events: ${props => props.isCollected ? 'auto' : 'auto'};
  
  ${props => props.$isDigitalScreen && `
    width: 240px;
    height: 40px;
    background: #1a1a1a !important;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-family: 'Digital', monospace;
    color: #00ff00;
    font-size: 24px;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5);
    border: none;
    
    &:hover, &:active, &:focus {
      background: #2a2a2a !important;
    }
  `}

  &:hover {
    transform: ${props => !props.isCollected && !props.$isDigitalScreen && 'scale(1.05)'};
  }
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
      variant={variant}
      className={className}
      onClick={onClick || handleClick}
      onContextMenu={handleRightClick}
      disabled={disabled}
      isCollected={isCollected}
      data-button-id={buttonId}
      $isDigitalScreen={isDigitalScreen}
    >
      {displayText}
    </StyledButton>
  );
};

export default LevelButton;