import { generateUniqueId } from './idGenerator';

describe('generateUniqueId', () => {
  test('returns a string', () => {
    expect(typeof generateUniqueId('test')).toBe('string');
  });

  test('includes the prefix', () => {
    expect(generateUniqueId('item')).toMatch(/^item-/);
    expect(generateUniqueId('level')).toMatch(/^level-/);
  });

  test('generates unique IDs on consecutive calls', () => {
    const ids = new Set();
    for (let i = 0; i < 100; i++) {
      ids.add(generateUniqueId('test'));
    }
    expect(ids.size).toBe(100);
  });

  test('ID format has prefix-random-counter structure', () => {
    const id = generateUniqueId('abc');
    const parts = id.split('-');
    expect(parts[0]).toBe('abc');
    expect(parts.length).toBeGreaterThanOrEqual(2);
  });
});
