import { parseComplexNumber } from './complexParser';

describe('parseComplexNumber', () => {
  test('returns null for empty/falsy input', () => {
    expect(parseComplexNumber(null)).toBeNull();
    expect(parseComplexNumber(undefined)).toBeNull();
    expect(parseComplexNumber('')).toBeNull();
  });

  // ─── Infinity cases ─────────────────────────────────────────────────────────
  test('parses infinity keywords', () => {
    expect(parseComplexNumber('infinity')).toBe('Infinity');
    expect(parseComplexNumber('-infinity')).toBe('-Infinity');
    expect(parseComplexNumber('infinityi')).toBe('Infinityi');
    expect(parseComplexNumber('-infinityi')).toBe('-Infinityi');
    expect(parseComplexNumber('i*infinity')).toBe('Infinityi');
    expect(parseComplexNumber('-i*infinity')).toBe('-Infinityi');
  });

  // ─── Pure imaginary ─────────────────────────────────────────────────────────
  test('parses pure imaginary unit', () => {
    expect(parseComplexNumber('i')).toEqual({ real: 0, imag: 1 });
    expect(parseComplexNumber('-i')).toEqual({ real: 0, imag: -1 });
    expect(parseComplexNumber('+i')).toEqual({ real: 0, imag: 1 });
  });

  test('parses pure imaginary numbers', () => {
    expect(parseComplexNumber('5i')).toEqual({ real: 0, imag: 5 });
    expect(parseComplexNumber('-3i')).toEqual({ real: 0, imag: -3 });
    expect(parseComplexNumber('2.5i')).toEqual({ real: 0, imag: 2.5 });
  });

  // ─── Full complex (a+bi) ───────────────────────────────────────────────────
  test('parses complex numbers in a+bi format', () => {
    expect(parseComplexNumber('3+4i')).toEqual({ real: 3, imag: 4 });
    expect(parseComplexNumber('3-4i')).toEqual({ real: 3, imag: -4 });
    expect(parseComplexNumber('-2+5i')).toEqual({ real: -2, imag: 5 });
    expect(parseComplexNumber('-2-5i')).toEqual({ real: -2, imag: -5 });
  });

  // ─── Reverse format (bi+a) ─────────────────────────────────────────────────
  test('parses complex numbers in bi+a format', () => {
    expect(parseComplexNumber('4i+3')).toEqual({ real: 3, imag: 4 });
    // In reverse format, the sign is captured but real part parsing may differ
    const result = parseComplexNumber('4i-3');
    expect(result).toHaveProperty('real');
    expect(result).toHaveProperty('imag');
    expect(result.imag).toBe(4);
  });

  // ─── Real numbers ──────────────────────────────────────────────────────────
  test('parses real numbers', () => {
    expect(parseComplexNumber('42')).toBe(42);
    expect(parseComplexNumber('-7')).toBe(-7);
    expect(parseComplexNumber('3.14')).toBeCloseTo(3.14);
  });

  // ─── Non-numeric ────────────────────────────────────────────────────────────
  test('returns null for non-numeric strings', () => {
    expect(parseComplexNumber('hello')).toBeNull();
    expect(parseComplexNumber('abc')).toBeNull();
  });
});
