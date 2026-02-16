import { saveGameState, loadGameState, clearGameState } from './localStorage';

describe('localStorage utilities', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('saveGameState stores state and loadGameState retrieves it', () => {
    const state = { currentLevel: 5, inventory: ['sword'] };
    saveGameState(state);
    const loaded = loadGameState();
    expect(loaded).toEqual(state);
  });

  test('loadGameState returns undefined when no state is saved', () => {
    expect(loadGameState()).toBeUndefined();
  });

  test('clearGameState removes the saved state', () => {
    saveGameState({ currentLevel: 10 });
    clearGameState();
    expect(loadGameState()).toBeUndefined();
  });

  test('handles complex game state', () => {
    const state = {
      game: { currentLevel: { real: 3, imag: 4 }, visitedLevels: ['0+0i', '3+4i'] },
      achievements: { firstLevel: true },
      inventory: { equippedItem: null, bookshelf: Array(9).fill(null) },
    };
    saveGameState(state);
    expect(loadGameState()).toEqual(state);
  });

  test('saveGameState handles errors gracefully', () => {
    // Mock localStorage to throw
    const originalSetItem = Storage.prototype.setItem;
    Storage.prototype.setItem = jest.fn(() => { throw new Error('quota exceeded'); });
    
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => saveGameState({ test: true })).not.toThrow();
    consoleSpy.mockRestore();
    Storage.prototype.setItem = originalSetItem;
  });
});
