import styled from 'styled-components';
import { colors, fonts, radii, transitions, shadows } from '../../styles/theme';

export const FakeCollectableLevelButton = styled.button`
  width: auto;
  min-width: ${props => props.small ? '45px' : '60px'};
  height: 30px;
  background: ${colors.primary};
  color: white;
  border: 1px solid ${colors.primaryHover};
  border-radius: ${radii.sm};
  cursor: pointer;
  opacity: 1 !important;
  pointer-events: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: ${props => props.$isDigitalScreen ? '0' : '0.6rem 0'};
  transition: 
    transform ${transitions.fast},
    background ${transitions.fast},
    box-shadow ${transitions.fast};
  padding: ${props => props.$isDigitalScreen ? '0 15px' : '0.5rem 1.4rem'};
  position: relative;
  z-index: 2;
  white-space: nowrap;
  font-family: ${fonts.mono};
  font-size: ${props => {
    const textLength = props.children?.toString().length || 1;
    if (textLength >= 8) return '0.7rem';
    if (textLength >= 6) return '0.8rem';
    if (textLength >= 4) return '0.9rem';
    return '0.9rem';
  }};
  letter-spacing: 0.02em;

  &:hover {
    transform: ${props => !props.isCollected && !props.$isDigitalScreen && 'translateY(-1px)'};
    background: ${colors.primaryHover};
    box-shadow: ${shadows.glow};
  }

  &:active {
    transform: translateY(0) scale(0.98);
    box-shadow: none;
  }

  &:disabled {
    opacity: 1 !important;
    cursor: pointer;
  }

  ${props => props.$isDigitalScreen && `
    background: #0a0a0a;
    border: 1px solid #222;
    border-radius: ${radii.md};
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-family: 'Digital', ${fonts.mono};
    color: #00ff00;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5);
    text-align: right;
    padding-right: 5px;
    font-size: 12px;
    
    &:hover {
      background: #1a1a1a;
      box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5);
      transform: none;
    }
  `}
`; 