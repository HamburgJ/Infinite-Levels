import { ColorSchemeManager } from '../services/ColorSchemeManager';

describe('ColorSchemeManager', () => {
  let manager;

  beforeEach(() => {
    manager = new ColorSchemeManager();
  });

  describe('getColorScheme', () => {
    test('returns a color scheme for positive levels', () => {
      const scheme = manager.getColorScheme(5);
      expect(scheme).toHaveProperty('primary');
      expect(scheme).toHaveProperty('background');
      expect(scheme).toHaveProperty('text');
    });

    test('returns dark scheme for negative levels', () => {
      const scheme = manager.getColorScheme(-5);
      expect(scheme.primary).toBe('#000000');
      expect(scheme.text).toBe('#ffffff');
      expect(scheme.background).toBe('#1a1a1a');
    });

    test('returns complex scheme for complex levels', () => {
      const scheme = manager.getColorScheme({ real: 3, imag: 4 });
      expect(scheme).toHaveProperty('primary');
      expect(scheme).toHaveProperty('intensity');
      expect(scheme).toHaveProperty('accent');
    });
  });

  describe('getPositiveColorScheme', () => {
    test('returns white-based scheme', () => {
      const scheme = manager.getPositiveColorScheme(1);
      expect(scheme.primary).toBe('#ffffff');
      expect(scheme.secondary).toBe('#000000');
      expect(scheme.text).toBe('#000000');
    });
  });

  describe('getNegativeColorScheme', () => {
    test('returns black-based scheme', () => {
      const scheme = manager.getNegativeColorScheme(-1);
      expect(scheme.primary).toBe('#000000');
      expect(scheme.secondary).toBe('#ffffff');
      expect(scheme.text).toBe('#ffffff');
    });
  });

  describe('getColorFromAngle', () => {
    test('returns hsl string', () => {
      const color = manager.getColorFromAngle(0);
      expect(color).toMatch(/^hsl\(/);
    });
  });

  describe('getIntensityFromMagnitude', () => {
    test('clamps between 0.3 and 1', () => {
      expect(manager.getIntensityFromMagnitude(0)).toBeGreaterThanOrEqual(0.3);
      expect(manager.getIntensityFromMagnitude(100)).toBeLessThanOrEqual(1);
      expect(manager.getIntensityFromMagnitude(5)).toBeGreaterThanOrEqual(0.3);
      expect(manager.getIntensityFromMagnitude(5)).toBeLessThanOrEqual(1);
    });
  });
});
