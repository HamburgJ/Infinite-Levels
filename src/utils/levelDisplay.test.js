import { getLevelDisplay } from './levelDisplay';

describe('getLevelDisplay', () => {
  test('returns string levels as-is', () => {
    expect(getLevelDisplay('Demo')).toBe('Demo');
    expect(getLevelDisplay('some-level')).toBe('some-level');
  });

  test('converts numbers to strings', () => {
    expect(getLevelDisplay(0)).toBe('0');
    expect(getLevelDisplay(42)).toBe('42');
    expect(getLevelDisplay(-7)).toBe('-7');
  });

  test('formats complex objects with imag=0 as integers', () => {
    expect(getLevelDisplay({ real: 5, imag: 0 })).toBe('5');
    expect(getLevelDisplay({ real: -3, imag: 0 })).toBe('-3');
  });

  test('formats full complex objects', () => {
    expect(getLevelDisplay({ real: 3, imag: 4 })).toBe('3+4i');
    expect(getLevelDisplay({ real: 0, imag: 1 })).toBe('i');
    expect(getLevelDisplay({ real: 0, imag: -1 })).toBe('-i');
    expect(getLevelDisplay({ real: 2, imag: -3 })).toBe('2-3i');
  });

  test('returns "0" for undefined', () => {
    expect(getLevelDisplay(undefined)).toBe('0');
  });
});
