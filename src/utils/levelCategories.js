import { parseStoredLevel } from './complex';

export const LEVEL_CATEGORIES = {
  INTEGERS: 'Integers',
  REALS: 'Reals',
  COMPLEX: 'Complex',
  BEYOND: 'Beyond'
};

export const getLevelCategory = (levelStr) => {
  if (levelStr === 'Demo' || levelStr.includes('Infinity')) {
    return LEVEL_CATEGORIES.BEYOND;
  }

  const level = parseStoredLevel(levelStr);
  if (typeof level === 'object' && 'real' in level) {
    if (level.imag === 0) {
      return Number.isInteger(level.real) ? 
        LEVEL_CATEGORIES.INTEGERS : 
        LEVEL_CATEGORIES.REALS;
    }
    return LEVEL_CATEGORIES.COMPLEX;
  }

  return LEVEL_CATEGORIES.INTEGERS;
};

export const getComplexColor = (levelStr) => {
  const level = parseStoredLevel(levelStr);
  if (typeof level !== 'object' || !('real' in level)) return null;
  
  const angle = Math.atan2(level.imag, level.real);
  const hue = ((angle + Math.PI) / (2 * Math.PI)) * 360;
  return `hsl(${hue}, 70%, 50%)`;
}; 