import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentLevel } from '../../store';

const BreadcrumbContainer = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  gap: 0.25rem;
  z-index: 1000;
  opacity: 0.5;
  transition: opacity 0.3s;
  
  &:hover {
    opacity: 1;
  }
`;

const BreadcrumbPill = styled.button`
  background: rgba(108, 117, 125, 0.8);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 2px 10px;
  font-size: 0.75rem;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.2s;
  
  &:hover {
    background: rgba(13, 110, 253, 0.9);
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

  // Show last 5 levels from history (excluding the current level which is the last entry)
  const recentLevels = levelHistory
    .slice(-6, -1)
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
