import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentLevel } from '../../store';

const BreadcrumbContainer = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  gap: 0.3rem;
  z-index: 1000;
  opacity: 0.4;
  transition: opacity 0.3s;
  
  &:hover {
    opacity: 1;
  }
`;

const BreadcrumbPill = styled.button`
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 9999px;
  padding: 3px 10px;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.02em;
  cursor: pointer;
  white-space: nowrap;
  backdrop-filter: blur(8px);
  transition: background 0.15s ease, transform 0.15s ease;
  
  &:hover {
    background: var(--color-primary);
    transform: translateY(-1px);
  }
`;

const formatLevelDisplay = (level) => {
  if (typeof level === 'string') return level;
  if (typeof level === 'number') return level.toString();
  if (typeof level === 'object' && level !== null) {
    const { real, imag } = level;
    if (imag === 0) return real.toString();
    if (real === 0 && imag === 1) return 'i';
    if (real === 0 && imag === -1) return '-i';
    if (real === 0) return `${imag}i`;
    if (imag === 1) return `${real}+i`;
    if (imag === -1) return `${real}-i`;
    return `${real}${imag >= 0 ? '+' : ''}${imag}i`;
  }
  return '?';
};

const Breadcrumbs = () => {
  const levelHistory = useSelector(state => state.game.levelHistory);
  const dispatch = useDispatch();

  // Show last 10 levels from history (excluding the current level which is the last entry)
  const recentLevels = levelHistory
    .slice(-11, -1)
    .filter(Boolean);

  if (recentLevels.length === 0) return null;

  return (
    <BreadcrumbContainer>
      {recentLevels.map((level, index) => (
        <BreadcrumbPill
          key={index}
          onClick={() => dispatch(setCurrentLevel(level))}
          title={`Go to Level ${formatLevelDisplay(level)}`}
        >
          {formatLevelDisplay(level)}
        </BreadcrumbPill>
      ))}
    </BreadcrumbContainer>
  );
};

export default Breadcrumbs;
