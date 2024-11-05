const ComplexNumberManager = {
  constructor() {
    this.complexLevels = new Set();
  },

  toComplex(value) {
    if (typeof value === 'object' && 'real' in value && 'imag' in value) {
      return value;
    }
    return { real: value, imag: 0 };
  },

  getAngle(complex) {
    return Math.atan2(complex.imag, complex.real);
  },

  getMagnitude(complex) {
    return Math.sqrt(complex.real * complex.real + complex.imag * complex.imag);
  },

  getColorScheme(complex) {
    const angle = this.getAngle(complex);
    const hue = ((angle + Math.PI) / (2 * Math.PI)) * 360;
    return {
      primary: `hsl(${hue}, 70%, 60%)`,
      background: `hsl(${hue}, 30%, 95%)`,
      text: `hsl(${hue}, 80%, 20%)`
    };
  },

  isStable(complex) {
    const magnitude = this.getMagnitude(complex);
    return Number.isInteger(magnitude) || this.complexLevels.has(magnitude);
  },

  findNearestStableLevel(complex) {
    const magnitude = this.getMagnitude(complex);
    if (this.isStable(complex)) return complex;

    const nearestInteger = Math.round(magnitude);
    return { real: nearestInteger, imag: 0 };
  }
};

export default ComplexNumberManager; 