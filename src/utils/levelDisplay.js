import { formatComplexNumber } from './complex';

export const getLevelDisplay = (level) => {
  // Handle string representations (like "Demo")
  if (typeof level === 'string') {
    return level;
  }

  // Handle plain numbers
  if (typeof level === 'number') {
    return level.toString();
  }

  // Handle complex numbers
  if (typeof level === 'object' && 'real' in level) {
    // For pure real numbers, just show the real part
    if (level.imag === 0) {
      return level.real.toString();
    }
    // For complex numbers, use the complex formatter
    return formatComplexNumber(level);
  }

  return '0';
}; 