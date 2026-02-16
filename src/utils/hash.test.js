import { hashString } from './hash';

describe('hashString', () => {
  test('returns a string', () => {
    expect(typeof hashString('test')).toBe('string');
  });

  test('produces consistent results for the same input', () => {
    expect(hashString('hello')).toBe(hashString('hello'));
    expect(hashString('level-42')).toBe(hashString('level-42'));
  });

  test('produces different results for different inputs', () => {
    expect(hashString('hello')).not.toBe(hashString('world'));
    expect(hashString('level-1')).not.toBe(hashString('level-2'));
  });

  test('handles empty string', () => {
    const result = hashString('');
    expect(typeof result).toBe('string');
    expect(result).toBe('0');
  });

  test('handles long strings', () => {
    const longStr = 'a'.repeat(10000);
    const result = hashString(longStr);
    expect(typeof result).toBe('string');
    expect(result.length).toBeGreaterThan(0);
  });

  test('returns base-36 encoded string', () => {
    const result = hashString('test-string');
    expect(result).toMatch(/^[0-9a-z]+$/);
  });
});
