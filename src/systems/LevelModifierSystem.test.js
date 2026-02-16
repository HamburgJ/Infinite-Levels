import LevelModifierSystem from '../systems/LevelModifierSystem';

describe('LevelModifierSystem', () => {
  describe('applyModifier', () => {
    test('multiplies a level', () => {
      expect(LevelModifierSystem.applyModifier(5, 'multiply', 3)).toBe(15);
      expect(LevelModifierSystem.applyModifier(10, 'multiply', 0)).toBe(0);
      expect(LevelModifierSystem.applyModifier(-2, 'multiply', 4)).toBe(-8);
    });

    test('adds to a level', () => {
      expect(LevelModifierSystem.applyModifier(5, 'add', 3)).toBe(8);
      expect(LevelModifierSystem.applyModifier(5, 'add', -10)).toBe(-5);
      expect(LevelModifierSystem.applyModifier(0, 'add', 0)).toBe(0);
    });

    test('applies complex modifier', () => {
      const operation = (level) => ({ real: level.real + 1, imag: level.imag + 1 });
      
      // Passing a number gets converted to complex
      const result = LevelModifierSystem.applyModifier(5, 'complex', operation);
      expect(result).toEqual({ real: 6, imag: 1 });
    });

    test('applies complex modifier to complex level', () => {
      const operation = (level) => ({ real: level.real * 2, imag: level.imag * 2 });
      const result = LevelModifierSystem.applyModifier(
        { real: 3, imag: 4 }, 'complex', operation
      );
      expect(result).toEqual({ real: 6, imag: 8 });
    });

    test('returns level unchanged for unknown modifier', () => {
      expect(LevelModifierSystem.applyModifier(5, 'unknown', 10)).toBe(5);
    });
  });

  describe('combineModifiers', () => {
    test('chains multiple modifiers', () => {
      const combined = LevelModifierSystem.combineModifiers([
        { type: 'add', value: 5 },
        { type: 'multiply', value: 2 },
      ]);
      // (10 + 5) * 2 = 30
      expect(combined(10)).toBe(30);
    });

    test('handles empty modifier array', () => {
      const combined = LevelModifierSystem.combineModifiers([]);
      expect(combined(42)).toBe(42);
    });

    test('handles single modifier', () => {
      const combined = LevelModifierSystem.combineModifiers([
        { type: 'add', value: 7 },
      ]);
      expect(combined(3)).toBe(10);
    });
  });
});
