import achievements from './achievements';

describe('achievements data', () => {
  test('is a non-empty object', () => {
    expect(Object.keys(achievements).length).toBeGreaterThan(0);
  });

  test('every achievement has required fields', () => {
    Object.values(achievements).forEach(achievement => {
      expect(achievement).toHaveProperty('id');
      expect(achievement).toHaveProperty('title');
      expect(achievement).toHaveProperty('description');
      expect(typeof achievement.title).toBe('string');
      expect(typeof achievement.description).toBe('string');
      expect(achievement.title.length).toBeGreaterThan(0);
      expect(achievement.description.length).toBeGreaterThan(0);
    });
  });

  test('achievement ids match their keys', () => {
    Object.entries(achievements).forEach(([key, achievement]) => {
      expect(achievement.id).toBe(key);
    });
  });

  test('has many achievements defined', () => {
    expect(Object.keys(achievements).length).toBeGreaterThan(50);
  });

  test('secret achievements have a secret flag', () => {
    const secretAchievements = Object.values(achievements).filter(a => a.secret);
    expect(secretAchievements.length).toBeGreaterThan(0);
    secretAchievements.forEach(a => {
      expect(a.secret).toBe(true);
    });
  });
});
