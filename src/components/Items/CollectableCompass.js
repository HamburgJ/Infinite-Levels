import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import BaseCollectable from './BaseCollectable';
import { equipItem, unequipItem } from '../../store/slices/inventorySlice';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% { filter: drop-shadow(0 0 4px rgba(100, 200, 255, 0.4)); }
  50% { filter: drop-shadow(0 0 12px rgba(100, 200, 255, 0.8)); }
`;

const CompassContainer = styled.div`
  text-align: center;
  margin: 1.5rem 0;
`;

const CompassBody = styled.div`
  display: inline-block;
  cursor: pointer;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 3px solid ${props => props.$collected ? '#888' : '#64c8ff'};
  background: ${props => props.$collected
    ? 'radial-gradient(circle, #333, #222)'
    : 'radial-gradient(circle, #1a2a4a, #0a1a3a)'};
  position: relative;
  opacity: ${props => props.$collected ? 0.5 : 1};
  animation: ${props => props.$collected ? 'none' : pulse} 3s ease-in-out infinite;
  transition: transform 0.3s ease;

  &:hover {
    transform: ${props => props.$collected ? 'none' : 'scale(1.1)'};
  }
`;

const Needle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 4px;
  height: 30px;
  margin-left: -2px;
  margin-top: -25px;
  background: linear-gradient(to bottom, #ff4444 50%, #ffffff 50%);
  transform-origin: center 25px;
  transform: rotate(${props => props.$angle || 0}deg);
  transition: transform 0.5s ease;
  border-radius: 2px;
`;

const CompassLabel = styled.div`
  font-size: 0.9rem;
  color: #64c8ff;
  margin-top: 0.5rem;
  font-style: italic;
`;

const STABLE_VALUES = [0, 1, 2, 3, 5];

const findNearestStableIsland = (current) => {
  if (!current || typeof current !== 'object') return null;
  let best = null;
  let bestDist = Infinity;
  for (const r of STABLE_VALUES) {
    for (const i of STABLE_VALUES) {
      if (i === 0) continue; // real-axis levels aren't complex
      const dist = Math.abs(current.real - r) + Math.abs(current.imag - i);
      if (dist > 0 && dist < bestDist) {
        bestDist = dist;
        best = { real: r, imag: i, dist };
      }
      // Also check negative quadrants
      for (const sr of [1, -1]) {
        for (const si of [1, -1]) {
          const cr = r * sr;
          const ci = i * si;
          if (ci === 0) continue;
          const d = Math.abs(current.real - cr) + Math.abs(current.imag - ci);
          if (d > 0 && d < bestDist) {
            bestDist = d;
            best = { real: cr, imag: ci, dist: d };
          }
        }
      }
    }
  }
  return best;
};

const getDirectionLabel = (from, to) => {
  const dr = to.real - from.real;
  const di = to.imag - from.imag;
  const parts = [];
  if (di > 0) parts.push('north');
  if (di < 0) parts.push('south');
  if (dr > 0) parts.push('east');
  if (dr < 0) parts.push('west');
  return parts.join('') || 'here';
};

export const CollectableCompass = ({ forceAvailable = false, isInventory = false, isStorage = false }) => {
  const dispatch = useDispatch();
  const equippedItem = useSelector(state => state.inventory.equippedItem);
  const currentLevel = useSelector(state => state.game.currentLevel);

  const itemConfig = {
    type: 'compass',
    id: 'compass',
    name: 'Compass'
  };

  const handleClick = (e) => {
    const isRightClick = e?.type === 'contextmenu';
    if (isRightClick) e.preventDefault();
    if (isInventory) return;

    if (equippedItem?.type === 'compass') {
      dispatch(unequipItem());
    } else if (equippedItem === null) {
      dispatch(equipItem({
        ...itemConfig,
        fromStorage: isStorage
      }));
    }
  };

  // Calculate needle angle toward nearest stable island
  const nearest = typeof currentLevel === 'object' && currentLevel.imag !== 0
    ? findNearestStableIsland(currentLevel)
    : null;
  const angle = nearest
    ? Math.atan2(-(nearest.imag - currentLevel.imag), nearest.real - currentLevel.real) * 180 / Math.PI - 90
    : 0;

  return (
    <BaseCollectable
      itemConfig={itemConfig}
      useBaseCollection={false}
      renderItem={({ collected }) => (
        <CompassContainer onClick={handleClick} onContextMenu={handleClick}>
          <CompassBody $collected={collected && !forceAvailable}>
            <Needle $angle={collected ? 0 : angle} />
          </CompassBody>
          <CompassLabel>
            {collected && !forceAvailable ? 'Compass (collected)' : '🧭 The Compass'}
          </CompassLabel>
        </CompassContainer>
      )}
    />
  );
};

// Helper component to show compass reading on unstable levels
export const CompassReading = ({ levelNumber }) => {
  const equippedItem = useSelector(state => state.inventory.equippedItem);
  const bookshelf = useSelector(state => state.inventory.bookshelf);
  const hasCompass = equippedItem?.type === 'compass' ||
    (bookshelf && bookshelf.some(item => item?.type === 'compass'));

  if (!hasCompass) return null;
  if (typeof levelNumber !== 'object' || levelNumber.imag === 0) return null;

  const nearest = findNearestStableIsland(levelNumber);
  if (!nearest) return null;

  const dir = getDirectionLabel(levelNumber, nearest);
  const fmtC = (r, i) => `${r}${i >= 0 ? '+' : ''}${i}i`;

  return (
    <CompassReadingContainer>
      🧭 The compass trembles. <strong>{dir}</strong> — {nearest.dist} step{nearest.dist !== 1 ? 's' : ''} to stable ground at {fmtC(nearest.real, nearest.imag)}.
    </CompassReadingContainer>
  );
};

const CompassReadingContainer = styled.div`
  background: rgba(100, 200, 255, 0.1);
  border: 1px solid rgba(100, 200, 255, 0.3);
  border-radius: 8px;
  padding: 0.75rem 1rem;
  margin: 0.5rem 0;
  font-size: 0.9rem;
  color: #64c8ff;
  font-style: italic;
`;

export default CollectableCompass;
