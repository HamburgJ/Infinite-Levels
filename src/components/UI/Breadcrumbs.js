import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentLevel } from '../../store';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateX(-6px); }
  to   { opacity: 1; transform: translateX(0); }
`;

const HistoryPanel = styled.div`
  position: fixed;
  bottom: 1.2rem;
  left: 1rem;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;
  max-height: calc(100vh - 6rem);
`;

const ToggleButton = styled.button`
  background: rgba(0, 0, 0, 0.45);
  color: rgba(255, 255, 255, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 0.75rem;
  font-family: var(--font-mono);
  letter-spacing: 0.03em;
  cursor: pointer;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  gap: 5px;
  min-height: 44px;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: rgba(0, 0, 0, 0.6);
    color: rgba(255, 255, 255, 0.85);
  }

  svg {
    width: 12px;
    height: 12px;
    opacity: 0.7;
  }
`;

const LevelList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-bottom: 6px;
  overflow-y: auto;
  max-height: calc(100vh - 10rem);

  /* thin scrollbar */
  &::-webkit-scrollbar { width: 3px; }
  &::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 3px; }
`;

const LevelEntry = styled.button`
  background: rgba(0, 0, 0, 0.35);
  color: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 6px;
  padding: 4px 12px 4px 10px;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.02em;
  cursor: pointer;
  white-space: nowrap;
  text-align: left;
  backdrop-filter: blur(10px);
  transition: background 0.15s, color 0.15s, transform 0.15s;
  display: flex;
  align-items: center;
  gap: 6px;
  animation: ${fadeIn} 0.2s ease both;
  ${({ $i }) => css`animation-delay: ${$i * 0.03}s;`}

  &::before {
    content: '';
    display: block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.25);
    flex-shrink: 0;
    transition: background 0.15s;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    color: #fff;
    transform: translateX(3px);

    &::before {
      background: var(--color-primary, #6c9bff);
    }
  }
`;

/* Inline SVG icon – a simple clock/history icon */
const HistoryIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1.5 8a6.5 6.5 0 1 1 1.02 3.5" />
    <polyline points="1,5.5 1.5,8 4,8" />
    <polyline points="8,4.5 8,8 10.5,9.5" />
  </svg>
);

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
  const visitedLevels = useSelector(state => state.game.visitedLevels || []);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);

  // Auto-open after the player has visited 3+ unique levels (onboarding moment)
  // Skip on small screens to avoid covering content
  useEffect(() => {
    if (!hasAutoOpened && visitedLevels.length >= 3 && window.innerWidth >= 768) {
      setOpen(true);
      setHasAutoOpened(true);
    }
  }, [visitedLevels.length, hasAutoOpened]);

  // Show last 10 levels (excluding current, which is the last entry)
  const recentLevels = levelHistory
    .slice(-11, -1)
    .filter(Boolean);

  if (recentLevels.length === 0) return null;

  // Show newest first so the most recent visit is at the bottom, closest to the toggle
  const displayed = [...recentLevels].reverse();

  return (
    <HistoryPanel>
      {open && (
        <LevelList>
          {displayed.map((level, index) => (
            <LevelEntry
              key={index}
              $i={displayed.length - index}
              onClick={() => dispatch(setCurrentLevel(level))}
              title={`Go to Level ${formatLevelDisplay(level)}`}
            >
              {formatLevelDisplay(level)}
            </LevelEntry>
          ))}
        </LevelList>
      )}
      <ToggleButton onClick={() => setOpen(o => !o)} title="Level history">
        <HistoryIcon />
        {open ? 'Hide' : 'History'}
      </ToggleButton>
    </HistoryPanel>
  );
};

export default Breadcrumbs;
