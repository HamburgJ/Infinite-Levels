import achievementReducer, {
  addAchievement,
  clearRecentAchievement,
  markAchievementsSeen,
  recordShrineVisit,
  markShrineOpened,
  addNewlyOpenableShrine,
  clearNewlyOpenableShrine,
  purifyAchievements,
} from './achievementSlice';

const makeInitialState = () => ({
  achievements: {},
  hasUnlockedAny: false,
  recentAchievements: [],
  hasNewAchievements: false,
  visitedShrines: {},
  newlyOpenableShrines: [],
});

describe('achievementSlice reducer', () => {
  // ─── addAchievement ────────────────────────────────────────────────────────
  describe('addAchievement', () => {
    test('adds a new achievement', () => {
      const state = achievementReducer(
        makeInitialState(),
        addAchievement({ id: 'FIRST', title: 'First!', description: 'First level', emoji: '🎉' })
      );
      expect(state.achievements.FIRST).toBeDefined();
      expect(state.achievements.FIRST.title).toBe('First!');
      expect(state.achievements.FIRST.unlocked).toBe(true);
      expect(state.hasUnlockedAny).toBe(true);
      expect(state.hasNewAchievements).toBe(true);
    });

    test('does not overwrite existing achievements', () => {
      let state = achievementReducer(
        makeInitialState(),
        addAchievement({ id: 'A', title: 'Original', description: 'desc', emoji: '✅' })
      );
      state = achievementReducer(
        state,
        addAchievement({ id: 'A', title: 'Overwrite', description: 'new', emoji: '❌' })
      );
      expect(state.achievements.A.title).toBe('Original');
    });

    test('pushes to recentAchievements', () => {
      const state = achievementReducer(
        makeInitialState(),
        addAchievement({ id: 'B', title: 'Bee', description: 'buzz', emoji: '🐝' })
      );
      expect(state.recentAchievements).toHaveLength(1);
      expect(state.recentAchievements[0].id).toBe('B');
    });
  });

  // ─── clearRecentAchievement ────────────────────────────────────────────────
  describe('clearRecentAchievement', () => {
    test('removes first recent achievement', () => {
      let state = achievementReducer(
        makeInitialState(),
        addAchievement({ id: 'X', title: 'X', description: 'x', emoji: '❎' })
      );
      state = achievementReducer(
        state,
        addAchievement({ id: 'Y', title: 'Y', description: 'y', emoji: '✳️' })
      );
      state = achievementReducer(state, clearRecentAchievement());
      expect(state.recentAchievements).toHaveLength(1);
      expect(state.recentAchievements[0].id).toBe('Y');
    });

    test('does nothing on empty list', () => {
      const state = achievementReducer(makeInitialState(), clearRecentAchievement());
      expect(state.recentAchievements).toHaveLength(0);
    });
  });

  // ─── markAchievementsSeen ──────────────────────────────────────────────────
  describe('markAchievementsSeen', () => {
    test('sets hasNewAchievements to false', () => {
      let state = achievementReducer(
        makeInitialState(),
        addAchievement({ id: 'Z', title: 'Z', description: 'z', emoji: '💤' })
      );
      expect(state.hasNewAchievements).toBe(true);
      state = achievementReducer(state, markAchievementsSeen());
      expect(state.hasNewAchievements).toBe(false);
    });
  });

  // ─── shrine operations ────────────────────────────────────────────────────
  describe('shrine operations', () => {
    test('records a shrine visit', () => {
      const state = achievementReducer(
        makeInitialState(),
        recordShrineVisit({ level: 42, requiredCount: 5, teaserText: 'hint' })
      );
      expect(state.visitedShrines['42']).toBeDefined();
      expect(state.visitedShrines['42'].opened).toBe(false);
    });

    test('marks a shrine as opened', () => {
      let state = achievementReducer(
        makeInitialState(),
        recordShrineVisit({ level: 42, requiredCount: 5 })
      );
      state = achievementReducer(state, markShrineOpened(42));
      expect(state.visitedShrines['42'].opened).toBe(true);
    });

    test('adds and clears newly openable shrines', () => {
      let state = achievementReducer(makeInitialState(), addNewlyOpenableShrine(10));
      expect(state.newlyOpenableShrines).toContain('10');
      state = achievementReducer(state, clearNewlyOpenableShrine());
      expect(state.newlyOpenableShrines).toHaveLength(0);
    });
  });

  // ─── purifyAchievements ────────────────────────────────────────────────────
  describe('purifyAchievements', () => {
    test('resets all achievement state', () => {
      let state = achievementReducer(
        makeInitialState(),
        addAchievement({ id: 'P', title: 'P', description: 'p', emoji: '🅿️' })
      );
      state = achievementReducer(state, purifyAchievements());
      expect(state.achievements).toEqual({});
      expect(state.hasUnlockedAny).toBe(false);
      expect(state.recentAchievements).toEqual([]);
      expect(state.visitedShrines).toEqual({});
    });
  });
});
