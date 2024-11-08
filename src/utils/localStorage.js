const GAME_STATE_KEY = 'infiniteLevels_gameState';

export const saveGameState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(GAME_STATE_KEY, serializedState);
  } catch (err) {
    console.error('Could not save game state:', err);
  }
};

export const loadGameState = () => {
  try {
    const serializedState = localStorage.getItem(GAME_STATE_KEY);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Could not load game state:', err);
    return undefined;
  }
};

export const clearGameState = () => {
  try {
    localStorage.removeItem(GAME_STATE_KEY);
  } catch (err) {
    console.error('Could not clear game state:', err);
  }
}; 