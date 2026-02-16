import quests from './quests';

describe('quests data', () => {
  test('is a non-empty object', () => {
    expect(Object.keys(quests).length).toBeGreaterThan(0);
  });

  test('every quest has required fields', () => {
    Object.values(quests).forEach(quest => {
      expect(quest).toHaveProperty('id');
      expect(quest).toHaveProperty('title');
      expect(quest).toHaveProperty('emoji');
      expect(quest).toHaveProperty('description');
      expect(quest).toHaveProperty('waypoints');
      expect(quest).toHaveProperty('revealThreshold');
      expect(typeof quest.title).toBe('string');
      expect(typeof quest.description).toBe('string');
      expect(Array.isArray(quest.waypoints)).toBe(true);
    });
  });

  test('quest ids match their keys', () => {
    Object.entries(quests).forEach(([key, quest]) => {
      expect(quest.id).toBe(key);
    });
  });

  test('waypoints have required structure', () => {
    Object.values(quests).forEach(quest => {
      quest.waypoints.forEach(wp => {
        expect(wp).toHaveProperty('level');
        expect(wp).toHaveProperty('label');
        expect(typeof wp.level).toBe('string');
        expect(typeof wp.label).toBe('string');
      });
    });
  });

  test('revealThreshold is a non-negative number', () => {
    Object.values(quests).forEach(quest => {
      expect(typeof quest.revealThreshold).toBe('number');
      expect(quest.revealThreshold).toBeGreaterThanOrEqual(0);
    });
  });

  test('contains expected quest chains', () => {
    expect(quests.FIBONACCI_CHAIN).toBeDefined();
    expect(quests.POWERS_OF_TWO).toBeDefined();
    expect(quests.COMPLEX_EXPLORATION).toBeDefined();
    expect(quests.KEY_QUEST).toBeDefined();
    expect(quests.CARD_COLLECTION).toBeDefined();
  });
});
