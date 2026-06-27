import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { setCurrentLevel } from '../../store';
import { equipItem, unequipItem } from '../../store/slices/inventorySlice';
import { isItemAvailable } from '../../utils/itemLocation';
import { levelToString } from '../../utils/complex';
import { hashString } from '../../utils/hash';
import { colors, fonts, radii, transitions, shadows } from '../../styles/theme';

const variantPalette = {
  primary: { bg: colors.primary, border: colors.primaryHover, text: '#fff', hover: colors.primaryHover, active: colors.primaryActive },
  secondary: { bg: '#6b7280', border: '#4b5563', text: '#fff', hover: '#4b5563', active: '#374151' },
  success: { bg: colors.success, border: '#047857', text: '#fff', hover: '#047857', active: '#065f46' },
  danger: { bg: colors.danger, border: '#b91c1c', text: '#fff', hover: '#b91c1c', active: '#991b1b' },
  warning: { bg: colors.warning, border: '#b45309', text: '#111827', hover: '#f59e0b', active: '#b45309' },
  info: { bg: '#0891b2', border: '#0e7490', text: '#fff', hover: '#0e7490', active: '#155e75' },
  light: { bg: '#f8fafc', border: '#cbd5e1', text: colors.textMain, hover: '#e2e8f0', active: '#cbd5e1' },
  dark: { bg: '#111827', border: '#030712', text: '#fff', hover: '#1f2937', active: '#030712' },
};

const getVariantStyles = (variant = 'primary') => {
  if (variant === 'link') {
    return {
      bg: 'transparent',
      border: 'transparent',
      text: colors.primary,
      hover: 'transparent',
      active: 'transparent',
      hoverText: colors.primaryHover,
      padding: '0',
      margin: '0',
      shadow: 'none',
    };
  }

  const isOutline = variant.startsWith('outline-');
  const key = isOutline ? variant.replace('outline-', '') : variant;
  const base = variantPalette[key] || variantPalette.primary;

  if (!isOutline) return { ...base, shadow: shadows.glow };

  return {
    bg: 'transparent',
    border: base.border,
    text: base.bg,
    hover: base.bg,
    active: base.active,
    hoverText: base.text,
    shadow: shadows.glow,
  };
};

const StyledButton = styled.button`
  /* Base style — replaces Bootstrap btn-primary */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4em;
  font-family: ${fonts.body};
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0;
  color: ${props => getVariantStyles(props.$variant).text};
  background: ${props => getVariantStyles(props.$variant).bg};
  border: 1px solid ${props => getVariantStyles(props.$variant).border};
  border-radius: ${radii.sm};
  padding: ${props => props.$isDigitalScreen ? '0 15px' : getVariantStyles(props.$variant).padding || '0.5rem 1.4rem'};
  margin: ${props => props.$isDigitalScreen ? '0' : getVariantStyles(props.$variant).margin || '0.6rem 0.6rem'};
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
    color: ${props => getVariantStyles(props.$variant).hoverText || getVariantStyles(props.$variant).text};
    background: ${props => getVariantStyles(props.$variant).hover};
    box-shadow: ${props => getVariantStyles(props.$variant).shadow};
    transform: ${props => !props.$isCollected && !props.$isDigitalScreen ? 'translateY(-1px)' : 'none'};
  }

  &:active {
    background: ${props => getVariantStyles(props.$variant).active};
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
  onClick = null,
  style,
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
      style={style}
      type="button"
      $isCollected={isCollected}
      data-button-id={buttonId}
      $isDigitalScreen={isDigitalScreen}
      $variant={variant}
    >
      {displayText}
    </StyledButton>
  );
};

export default LevelButton;
