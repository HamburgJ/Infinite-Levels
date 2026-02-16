import {
  formatComplexNumber,
  isComplexNumber,
  getComplexMagnitude,
  getComplexAngle,
  angleToColor,
  Complex,
  parseStoredLevel,
  formatLevel,
  levelToString,
  isNegative
} from './complex';

// ─── formatComplexNumber ──────────────────────────────────────────────────────

describe('formatComplexNumber', () => {
  test('formats zero correctly', () => {
    expect(formatComplexNumber(0)).toBe('0');
    expect(formatComplexNumber({ real: 0, imag: 0 })).toBe('0');
  });

  test('formats negative zero', () => {
    expect(formatComplexNumber(-0)).toBe('-0');
    expect(formatComplexNumber({ real: -0, imag: 0 })).toBe('-0');
  });

  test('formats real-only complex numbers', () => {
    expect(formatComplexNumber({ real: 5, imag: 0 })).toBe('5');
    expect(formatComplexNumber({ real: -3, imag: 0 })).toBe('-3');
    expect(formatComplexNumber({ real: 1.5, imag: 0 })).toBe('1.5');
  });

  test('formats imaginary-only complex numbers', () => {
    expect(formatComplexNumber({ real: 0, imag: 1 })).toBe('i');
    expect(formatComplexNumber({ real: 0, imag: -1 })).toBe('-i');
    expect(formatComplexNumber({ real: 0, imag: 5 })).toBe('5i');
    expect(formatComplexNumber({ real: 0, imag: -3 })).toBe('-3i');
  });

  test('formats full complex numbers', () => {
    expect(formatComplexNumber({ real: 2, imag: 3 })).toBe('2+3i');
    expect(formatComplexNumber({ real: 2, imag: -3 })).toBe('2-3i');
    expect(formatComplexNumber({ real: -2, imag: 3 })).toBe('-2+3i');
    expect(formatComplexNumber({ real: -2, imag: -3 })).toBe('-2-3i');
  });

  test('formats complex numbers with imag ±1 correctly', () => {
    expect(formatComplexNumber({ real: 3, imag: 1 })).toBe('3+i');
    expect(formatComplexNumber({ real: 3, imag: -1 })).toBe('3-i');
  });

  test('formats infinity strings', () => {
    expect(formatComplexNumber('Infinity')).toBe('∞');
    expect(formatComplexNumber('-Infinity')).toBe('-∞');
    expect(formatComplexNumber('Infinity+Infinityi')).toBe('∞+∞i');
  });

  test('formats plain numbers', () => {
    expect(formatComplexNumber(42)).toBe('42');
    expect(formatComplexNumber(-7)).toBe('-7');
  });
});

// ─── isComplexNumber ──────────────────────────────────────────────────────────

describe('isComplexNumber', () => {
  test('identifies complex objects', () => {
    expect(isComplexNumber({ real: 1, imag: 2 })).toBe(true);
    expect(isComplexNumber({ real: 0, imag: 0 })).toBe(true);
  });

  test('identifies infinity strings as complex', () => {
    expect(isComplexNumber('Infinity')).toBe(true);
    expect(isComplexNumber('-Infinity')).toBe(true);
    expect(isComplexNumber('Infinity+Infinityi')).toBe(true);
  });

  test('rejects non-complex values', () => {
    expect(isComplexNumber(5)).toBe(false);
    expect(isComplexNumber('hello')).toBe(false);
    expect(isComplexNumber(null)).toBe(false);
    expect(isComplexNumber(undefined)).toBe(false);
    expect(isComplexNumber({ x: 1 })).toBe(false);
  });
});

// ─── getComplexMagnitude ──────────────────────────────────────────────────────

describe('getComplexMagnitude', () => {
  test('computes magnitude for real-only numbers', () => {
    expect(getComplexMagnitude({ real: 3, imag: 0 })).toBe(3);
    expect(getComplexMagnitude({ real: -4, imag: 0 })).toBe(4);
  });

  test('computes magnitude for imaginary-only numbers', () => {
    expect(getComplexMagnitude({ real: 0, imag: 5 })).toBe(5);
  });

  test('computes magnitude for full complex numbers', () => {
    expect(getComplexMagnitude({ real: 3, imag: 4 })).toBe(5);
    expect(getComplexMagnitude({ real: -3, imag: -4 })).toBe(5);
  });

  test('magnitude of zero is zero', () => {
    expect(getComplexMagnitude({ real: 0, imag: 0 })).toBe(0);
  });
});

// ─── getComplexAngle ──────────────────────────────────────────────────────────

describe('getComplexAngle', () => {
  test('returns correct angle for complex objects', () => {
    expect(getComplexAngle({ real: 1, imag: 0 })).toBe(0);
    expect(getComplexAngle({ real: 0, imag: 1 })).toBeCloseTo(Math.PI / 2);
    expect(getComplexAngle({ real: -1, imag: 0 })).toBeCloseTo(Math.PI);
    expect(getComplexAngle({ real: 0, imag: -1 })).toBeCloseTo(-Math.PI / 2);
  });

  test('returns correct angle for infinity strings', () => {
    expect(getComplexAngle('Infinity')).toBe(0);
    expect(getComplexAngle('-Infinity')).toBe(Math.PI);
    expect(getComplexAngle('Infinityi')).toBe(Math.PI / 2);
  });

  test('returns 0 for positive numbers, PI for negative', () => {
    expect(getComplexAngle(5)).toBe(0);
    expect(getComplexAngle(-5)).toBe(Math.PI);
  });
});

// ─── angleToColor ─────────────────────────────────────────────────────────────

describe('angleToColor', () => {
  test('returns a valid hsl string', () => {
    const color = angleToColor(0);
    expect(color).toMatch(/^hsl\(\d+(\.\d+)?, 70%, 40%\)$/);
  });

  test('different angles produce different colors', () => {
    expect(angleToColor(0)).not.toBe(angleToColor(Math.PI));
  });
});

// ─── Complex arithmetic ───────────────────────────────────────────────────────

describe('Complex arithmetic', () => {
  test('add two complex numbers', () => {
    const result = Complex.add({ real: 1, imag: 2 }, { real: 3, imag: 4 });
    expect(result).toEqual({ real: 4, imag: 6 });
  });

  test('multiply two complex numbers', () => {
    // (1+2i)(3+4i) = 3+4i+6i+8i² = 3+10i-8 = -5+10i
    const result = Complex.multiply({ real: 1, imag: 2 }, { real: 3, imag: 4 });
    expect(result).toEqual({ real: -5, imag: 10 });
  });

  test('multiply by zero', () => {
    const result = Complex.multiply({ real: 5, imag: 3 }, { real: 0, imag: 0 });
    expect(result).toEqual({ real: 0, imag: 0 });
  });

  test('getNearestInteger rounds to nearest integers', () => {
    expect(Complex.getNearestInteger({ real: 1.4, imag: 2.6 }))
      .toEqual({ real: 1, imag: 3 });
    const result = Complex.getNearestInteger({ real: -0.3, imag: -0.7 });
    expect(result.imag).toBe(-1);
    // Math.round(-0.3) returns -0 in JS
    expect(Math.abs(result.real)).toBe(0);
  });
});

// ─── parseStoredLevel ─────────────────────────────────────────────────────────

describe('parseStoredLevel', () => {
  test('passes through non-strings', () => {
    expect(parseStoredLevel(5)).toBe(5);
    expect(parseStoredLevel({ real: 1, imag: 2 })).toEqual({ real: 1, imag: 2 });
  });

  test('passes through infinity strings', () => {
    expect(parseStoredLevel('Infinity')).toBe('Infinity');
    expect(parseStoredLevel('-Infinity+Infinityi')).toBe('-Infinity+Infinityi');
  });

  test('parses complex level strings', () => {
    expect(parseStoredLevel('3+4i')).toEqual({ real: 3, imag: 4 });
    expect(parseStoredLevel('0+1i')).toEqual({ real: 0, imag: 1 });
  });

  test('passes through strings without +', () => {
    expect(parseStoredLevel('Demo')).toBe('Demo');
  });
});

// ─── levelToString ────────────────────────────────────────────────────────────

describe('levelToString', () => {
  test('converts numbers to complex string format', () => {
    expect(levelToString(5)).toBe('5+0i');
    expect(levelToString(0)).toBe('0+0i');
  });

  test('converts complex objects', () => {
    expect(levelToString({ real: 3, imag: 4 })).toBe('3+4i');
    expect(levelToString({ real: 3, imag: -4 })).toBe('3-4i');
    expect(levelToString({ real: 0, imag: 0 })).toBe('0+0i');
  });

  test('handles negative zero', () => {
    expect(levelToString(-0)).toBe('-0+0i');
    expect(levelToString({ real: -0, imag: 0 })).toBe('-0+0i');
  });

  test('passes through strings', () => {
    expect(levelToString('Demo')).toBe('Demo');
    expect(levelToString('Infinity')).toBe('Infinity');
  });
});

// ─── formatLevel ──────────────────────────────────────────────────────────────

describe('formatLevel', () => {
  test('returns "0" for null/undefined', () => {
    expect(formatLevel(undefined)).toBe('0');
    expect(formatLevel(null)).toBe('0');
  });

  test('formats infinity strings', () => {
    const result = formatLevel('Infinity');
    expect(result).toContain('∞');
  });

  test('formats complex level strings', () => {
    expect(formatLevel('3+4i')).toBe('3+4i');
  });
});

// ─── isNegative ───────────────────────────────────────────────────────────────

describe('isNegative', () => {
  test('identifies negative numbers', () => {
    expect(isNegative(-5)).toBe(true);
    expect(isNegative(-0)).toBe(true);
    expect(isNegative(5)).toBe(false);
    expect(isNegative(0)).toBe(false);
  });

  test('identifies negative complex numbers', () => {
    expect(isNegative({ real: -3, imag: 0 })).toBe(true);
    expect(isNegative({ real: 3, imag: -5 })).toBe(false);
    expect(isNegative({ real: -0, imag: 0 })).toBe(true);
  });

  test('identifies negative strings', () => {
    expect(isNegative('-5')).toBe(true);
    expect(isNegative('5')).toBe(false);
    expect(isNegative('-Infinity')).toBe(true);
  });
});
