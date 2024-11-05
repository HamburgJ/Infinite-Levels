export const getComplexAngle = (complex) => {
  return Math.atan2(complex.imag, complex.real);
};

export const getComplexMagnitude = (complex) => {
  return Math.sqrt(complex.real * complex.real + complex.imag * complex.imag);
};

export const formatComplexNumber = (complex) => {
  if (complex.imag === 0) return `${complex.real}`;
  if (complex.real === 0) return complex.imag === 1 ? 'i' : complex.imag === -1 ? '-i' : `${complex.imag}i`;
  const sign = complex.imag > 0 ? '+' : '';
  return `${complex.real}${sign}${complex.imag === 1 ? 'i' : complex.imag === -1 ? '-i' : `${complex.imag}i`}`;
};

// Convert angle (in radians) to HSL color
export const angleToColor = (angle) => {
  // Convert angle to degrees and normalize to 0-360
  const hue = ((angle + Math.PI) * (180 / Math.PI)) % 360;
  return `hsl(${hue}, 70%, 60%)`;
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