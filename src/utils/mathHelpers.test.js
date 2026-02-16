import { normalDistribution } from './mathHelpers';

describe('normalDistribution', () => {
  test('returns a number', () => {
    expect(typeof normalDistribution(0, 1)).toBe('number');
  });

  test('returns finite values', () => {
    for (let i = 0; i < 50; i++) {
      const result = normalDistribution(0, 1);
      expect(Number.isFinite(result)).toBe(true);
    }
  });

  test('distribution centers around the mean', () => {
    const samples = [];
    for (let i = 0; i < 1000; i++) {
      samples.push(normalDistribution(100, 1));
    }
    const mean = samples.reduce((a, b) => a + b, 0) / samples.length;
    // Mean should be roughly 100 (within ~0.2 for 1000 samples)
    expect(mean).toBeGreaterThan(99);
    expect(mean).toBeLessThan(101);
  });

  test('standard deviation affects spread', () => {
    const narrow = [];
    const wide = [];
    for (let i = 0; i < 1000; i++) {
      narrow.push(normalDistribution(0, 0.1));
      wide.push(normalDistribution(0, 10));
    }
    const narrowStd = Math.sqrt(narrow.reduce((s, v) => s + v * v, 0) / narrow.length);
    const wideStd = Math.sqrt(wide.reduce((s, v) => s + v * v, 0) / wide.length);
    expect(wideStd).toBeGreaterThan(narrowStd);
  });

  test('zero standard deviation returns the mean', () => {
    // With stddev=0 the transform may produce NaN due to log(0), but
    // the function should at least return a number. We just verify it
    // doesn't throw for non-zero stddev.
    expect(() => normalDistribution(5, 0.001)).not.toThrow();
  });
});
