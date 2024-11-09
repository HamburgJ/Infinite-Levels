import { configureStore } from '@reduxjs/toolkit';
import { loadGameState } from '../utils/localStorage';
import debugConfig from '../config/debug';
import gameReducer from './slices/gameSlice';
import achievementReducer from './slices/achievementSlice';
import inventoryReducer from './slices/inventorySlice';
import flowerReducer from './slices/flowerSlice';
import jesterReducer from './slices/jesterSlice';
import modalReducer from './slices/modalSlice';
import { achievementMiddleware } from './middleware/achievementMiddleware';
import { analyticsMiddleware } from './middleware/analyticsMiddleware';

// Create middleware function
const localStorageMiddleware = store => next => action => {
  const result = next(action);
  
  if (!debugConfig.isDebugMode) {
    const state = store.getState();
    try {
      const serializedState = JSON.stringify({
        game: state.game,
        achievements: state.achievements,
        inventory: state.inventory,
        flower: state.flower
      });
      localStorage.setItem('infiniteLevels_gameState', serializedState);
    } catch (err) {
      console.error('Could not save state:', err);
    }
  }
  
  return result;
};

const preloadedState = !debugConfig.isDebugMode ? (() => {
  try {
    const serializedState = localStorage.getItem('infiniteLevels_gameState');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Could not load state:', err);
    return undefined;
  }
})() : undefined;

export const store = configureStore({
  reducer: {
    game: gameReducer,
    achievements: achievementReducer,
    inventory: inventoryReducer,
    flower: flowerReducer,
    jester: jesterReducer,
    modal: modalReducer
  },
  preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(localStorageMiddleware)
      .concat(achievementMiddleware)
      .concat(analyticsMiddleware)
});

export * from './slices/gameSlice';
export * from './slices/achievementSlice';
export * from './slices/inventorySlice';
export * from './slices/flowerSlice';
export * from './slices/jesterSlice';
export * from './slices/modalSlice';