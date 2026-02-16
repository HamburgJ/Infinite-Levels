import { LEVEL_CATEGORIES, getLevelCategory, getComplexColor } from './levelCategories';

describe('LEVEL_CATEGORIES', () => {
  test('defines all expected categories', () => {
    expect(LEVEL_CATEGORIES.INTEGERS).toBe('Integers');
    expect(LEVEL_CATEGORIES.REALS).toBe('Reals');
    expect(LEVEL_CATEGORIES.COMPLEX).toBe('Complex');
    expect(LEVEL_CATEGORIES.BEYOND).toBe('Beyond');
  });
});

describe('getLevelCategory', () => {
  test('classifies Demo as BEYOND', () => {
    expect(getLevelCategory('Demo')).toBe(LEVEL_CATEGORIES.BEYOND);
  });

  test('classifies Infinity levels as BEYOND', () => {
    expect(getLevelCategory('Infinity')).toBe(LEVEL_CATEGORIES.BEYOND);
    expect(getLevelCategory('-Infinity')).toBe(LEVEL_CATEGORIES.BEYOND);
    expect(getLevelCategory('Infinity+Infinityi')).toBe(LEVEL_CATEGORIES.BEYOND);
  });

  test('classifies integer complex levels as INTEGERS', () => {
    expect(getLevelCategory('5+0i')).toBe(LEVEL_CATEGORIES.INTEGERS);
    expect(getLevelCategory('-3+0i')).toBe(LEVEL_CATEGORIES.INTEGERS);
    expect(getLevelCategory('0+0i')).toBe(LEVEL_CATEGORIES.INTEGERS);
  });

  test('classifies real (non-integer) complex levels as REALS', () => {
    expect(getLevelCategory('1.5+0i')).toBe(LEVEL_CATEGORIES.REALS);
    expect(getLevelCategory('3.14+0i')).toBe(LEVEL_CATEGORIES.REALS);
  });

  test('classifies levels with imaginary part as COMPLEX', () => {
    expect(getLevelCategory('3+4i')).toBe(LEVEL_CATEGORIES.COMPLEX);
    expect(getLevelCategory('0+1i')).toBe(LEVEL_CATEGORIES.COMPLEX);
    expect(getLevelCategory('-2+3i')).toBe(LEVEL_CATEGORIES.COMPLEX);
  });
});

describe('getComplexColor', () => {
  test('returns an hsl color for complex levels', () => {
    const color = getComplexColor('3+4i');
    expect(color).toMatch(/^hsl\(/);
  });

  test('returns null for non-complex levels', () => {
    expect(getComplexColor('Demo')).toBeNull();
    expect(getComplexColor('Infinity')).toBeNull();
  });

  test('different angles produce different colors', () => {
    const color1 = getComplexColor('1+0i');
    const color2 = getComplexColor('0+1i');
    expect(color1).not.toBe(color2);
  });
});
