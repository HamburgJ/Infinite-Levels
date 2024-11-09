export const saveGameState = (state) => {
  try {
    localStorage.setItem('infiniteLevels_gameState', JSON.stringify(state));
  } catch (err) {
    console.error('Could not save state:', err);
  }
};

export const loadGameState = () => {
  try {
    const serializedState = localStorage.getItem('infiniteLevels_gameState');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Could not load state:', err);
    return undefined;
  }
};

export const clearGameState = () => {
  try {
    localStorage.removeItem('infiniteLevels_gameState');
  } catch (err) {
    console.error('Could not clear game state:', err);
  }
}; 