export const getComplexAngle = (value) => {
  // Handle special infinity cases
  if (typeof value === 'string' && value.includes('Infinity')) {
    const angleMap = {
      'Infinity': 0,
      '-Infinity': Math.PI,
      'Infinityi': Math.PI / 2,
      '-Infinityi': -Math.PI / 2,
      'Infinity-Infinityi': -Math.PI / 4,
      '-Infinity-Infinityi': -3 * Math.PI / 4,
      'Infinity+Infinityi': Math.PI / 4,
      '-Infinity+Infinityi': 3 * Math.PI / 4
    };
    return angleMap[value] || 0;
  }

  // Handle regular complex numbers
  if (typeof value === 'object' && value !== null && 'real' in value && 'imag' in value) {
    return Math.atan2(value.imag, value.real);
  }

  // Handle real numbers
  if (typeof value === 'number') {
    return value >= 0 ? 0 : Math.PI;
  }

  return 0;
};

const formatLargeNumber = (num) => {
  // Special case for zero
  if (num === 0) return '0';
  
  if (Math.abs(num) >= 1e5 || Math.abs(num) < 1e-5) {
    // Convert to scientific notation and limit precision
    const exp = Math.floor(Math.log10(Math.abs(num)));
    const base = num / Math.pow(10, exp);
    // Round to 3 significant digits
    const roundedBase = Number(base.toPrecision(3));
    // Convert exponent to superscript
    const superscript = exp.toString().split('').map(digit => 
      '⁰¹²³⁴⁵⁶⁷⁸⁹'[digit] || '⁻'
    ).join('');
    return `${roundedBase}·10${superscript}`;
  }
  // For smaller numbers, round to 3 decimal places
  return Number(num.toFixed(3)).toString();
};

export const formatComplexNumber = (value) => {
  // Handle special infinity cases
  if (typeof value === 'string' && value.includes('Infinity')) {
    return value.replace(/Infinity/g, '∞');
  }

  // Handle zero
  if (value === 0 || (typeof value === 'object' && value.real === 0 && value.imag === 0)) {
    return '0';
  }

  // Handle regular complex numbers
  if (typeof value === 'object' && value !== null && 'real' in value && 'imag' in value) {
    const { real, imag } = value;
    if (imag === 0) return formatLargeNumber(real);
    if (real === 0) {
      if (imag === 1) return 'i';
      if (imag === -1) return '-i';
      return `${formatLargeNumber(imag)}i`;
    }
    const sign = imag > 0 ? '+' : '';
    const imagPart = imag === 1 ? 'i' : imag === -1 ? '-i' : `${formatLargeNumber(imag)}i`;
    return `${formatLargeNumber(real)}${sign}${imagPart}`;
  }

  // Handle real numbers
  if (typeof value === 'number') {
    return formatLargeNumber(value);
  }

  return String(value);
};

export const isComplexNumber = (value) => {
  return (
    typeof value === 'object' && 
    value !== null && 
    'real' in value && 
    'imag' in value
  ) || (
    typeof value === 'string' && 
    value.includes('Infinity')
  );
};

export const getComplexMagnitude = (complex) => {
  return Math.sqrt(complex.real * complex.real + complex.imag * complex.imag);
};

// Convert angle (in radians) to HSL color
export const angleToColor = (angle) => {
  const hue = ((angle + Math.PI) / (2 * Math.PI)) * 360;
  return `hsl(${hue}, 70%, 40%)`;
};

// New utility for complex number operations
export const Complex = {
  add: (a, b) => ({ 
    real: a.real + b.real, 
    imag: a.imag + b.imag 
  }),
  multiply: (a, b) => ({
    real: a.real * b.real - a.imag * b.imag,
    imag: a.real * b.imag + a.imag * b.real
  }),
  getNearestInteger: (complex) => {
    const nearestReal = Math.round(complex.real);
    const nearestImag = Math.round(complex.imag);
    return { real: nearestReal, imag: nearestImag };
  }
}; 