import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { setCurrentLevel } from '../../store';
import { equipItem, unequipItem } from '../../store/slices/inventorySlice';
import { isItemAvailable } from '../../utils/itemLocation';
import { levelToString } from '../../utils/complex';

const StyledButton = styled(Button)`
  margin: 1rem 0;
  padding: 0.5rem 1.5rem;
  transition: transform 0.2s;
  opacity: ${props => props.isCollected ? 0.5 : 1};
  pointer-events: ${props => props.isCollected ? 'auto' : 'auto'};

  &:hover {
    transform: ${props => !props.isCollected && 'scale(1.05)'};
  }
`;

const LevelButton = ({ 
  targetLevel, 
  children, 
  variant = 'primary',
  className = '',
  disabled = false
}) => {
  const currentLevel = useSelector(state => state.game.currentLevel);
  const sourceLevel = levelToString(currentLevel);
  const buttonId = useRef(`level-button-${sourceLevel}-to-${targetLevel}`).current;
  const dispatch = useDispatch();
  const equippedItem = useSelector(state => state.inventory.equippedItem);
  const isCollected = !useSelector(state => isItemAvailable(state, buttonId));
  const buttonText = children || `Level ${targetLevel}`;

  console.log('LevelButton render:', {
    buttonId,
    targetLevel,
    isCollected,
    equippedItem
  });

  const handleClick = (e) => {
    if (isCollected) {
      if (equippedItem?.id === buttonId) {
        dispatch(unequipItem());
      }
    } else {
      dispatch(setCurrentLevel(targetLevel));
    }
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    if (!isCollected && !disabled) {
      const buttonConfig = {
        type: 'levelButton',
        value: targetLevel,
        variant,
        id: buttonId,
        name: `Level ${targetLevel} Button`,
        displayText: buttonText
      };
      dispatch(equipItem(buttonConfig));
    }
  };

  return (
    <StyledButton
      variant={variant}
      className={className}
      onClick={handleClick}
      onContextMenu={handleRightClick}
      disabled={disabled}
      isCollected={isCollected}
      data-button-id={buttonId}
    >
      {buttonText}
    </StyledButton>
  );
};

export default LevelButton;