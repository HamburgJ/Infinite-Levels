import gameReducer, {
  setCurrentLevel,
  markMechanicDiscovered,
  markHintOpened,
  incrementJesterEncounters,
  escapeLoop,
} from './gameSlice';

const makeInitialState = (overrides = {}) => ({
  currentLevel: '0',
  levelHistory: [],
  visitedLevels: [],
  tutorialLevelsVisited: [],
  inventory: { buttons: [], money: 0, specialItems: [] },
  discoveredMechanics: {
    numberEntry: false,
    clock: false,
    wallet: false,
    complexNumbers: false,
  },
  timeBasedElements: { activeTimers: {}, clockTime: null },
  levelState: { activeButtons: {}, unstableLevels: [] },
  hintsOpened: [],
  jesterEncounters: 0,
  lastNavigationTime: null,
  ...overrides,
});

describe('gameSlice reducer', () => {
  // ─── setCurrentLevel ──────────────────────────────────────────────────────
  describe('setCurrentLevel', () => {
    test('sets a numeric level (converted to complex)', () => {
      const state = gameReducer(makeInitialState(), setCurrentLevel(5));
      expect(state.currentLevel).toEqual({ real: 5, imag: 0 });
    });

    test('sets a complex level', () => {
      const state = gameReducer(
        makeInitialState(),
        setCurrentLevel({ real: 3, imag: 4 })
      );
      expect(state.currentLevel).toEqual({ real: 3, imag: 4 });
    });

    test('adds to visitedLevels on first visit', () => {
      const state = gameReducer(makeInitialState(), setCurrentLevel(5));
      expect(state.visitedLevels).toContain('5+0i');
    });

    test('does not duplicate visitedLevels', () => {
      let state = gameReducer(makeInitialState(), setCurrentLevel(5));
      state = gameReducer(state, setCurrentLevel(3));
      state = gameReducer(state, setCurrentLevel(5));
      const fives = state.visitedLevels.filter(l => l === '5+0i');
      expect(fives.length).toBe(1);
    });

    test('adds to levelHistory', () => {
      let state = gameReducer(makeInitialState(), setCurrentLevel(1));
      state = gameReducer(state, setCurrentLevel(2));
      state = gameReducer(state, setCurrentLevel(3));
      expect(state.levelHistory.length).toBe(3);
    });

    test('caps levelHistory at 15', () => {
      let state = makeInitialState();
      for (let i = 0; i < 20; i++) {
        state = gameReducer(state, setCurrentLevel(i));
      }
      expect(state.levelHistory.length).toBeLessThanOrEqual(15);
    });

    test('handles infinity by converting to string format', () => {
      const state = gameReducer(
        makeInitialState(),
        setCurrentLevel({ real: Infinity, imag: 0 })
      );
      expect(typeof state.currentLevel).toBe('string');
      expect(state.currentLevel).toContain('Infinity');
    });

    test('tracks tutorial levels (0-10)', () => {
      let state = gameReducer(makeInitialState(), setCurrentLevel(3));
      expect(state.tutorialLevelsVisited).toContain('3+0i');
    });

    test('updates lastNavigationTime', () => {
      const before = Date.now();
      const state = gameReducer(makeInitialState(), setCurrentLevel(1));
      expect(state.lastNavigationTime).toBeGreaterThanOrEqual(before);
    });
  });

  // ─── markMechanicDiscovered ────────────────────────────────────────────────
  describe('markMechanicDiscovered', () => {
    test('marks a mechanic as discovered', () => {
      const state = gameReducer(
        makeInitialState(),
        markMechanicDiscovered('clock')
      );
      expect(state.discoveredMechanics.clock).toBe(true);
    });
  });

  // ─── markHintOpened ────────────────────────────────────────────────────────
  describe('markHintOpened', () => {
    test('records an opened hint', () => {
      const state = gameReducer(
        makeInitialState(),
        markHintOpened({ real: 5, imag: 0 })
      );
      expect(state.hintsOpened).toContain('5+0i');
    });

    test('does not duplicate hints', () => {
      let state = gameReducer(makeInitialState(), markHintOpened({ real: 5, imag: 0 }));
      state = gameReducer(state, markHintOpened({ real: 5, imag: 0 }));
      expect(state.hintsOpened.filter(h => h === '5+0i').length).toBe(1);
    });
  });

  // ─── incrementJesterEncounters ─────────────────────────────────────────────
  describe('incrementJesterEncounters', () => {
    test('increments the counter', () => {
      let state = gameReducer(makeInitialState(), incrementJesterEncounters());
      expect(state.jesterEncounters).toBe(1);
      state = gameReducer(state, incrementJesterEncounters());
      expect(state.jesterEncounters).toBe(2);
    });
  });

  // ─── escapeLoop ────────────────────────────────────────────────────────────
  describe('escapeLoop', () => {
    test('escapes from loop levels 2-4 to level 5', () => {
      const state = gameReducer(
        makeInitialState({ currentLevel: { real: 3, imag: 0 } }),
        escapeLoop()
      );
      expect(state.currentLevel).toEqual({ real: 5, imag: 0 });
    });

    test('does not escape from levels outside 2-4', () => {
      const state = gameReducer(
        makeInitialState({ currentLevel: { real: 7, imag: 0 } }),
        escapeLoop()
      );
      expect(state.currentLevel).toEqual({ real: 7, imag: 0 });
    });
  });
});
