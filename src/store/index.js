import { configureStore } from '@reduxjs/toolkit';
import { loadGameState } from '../utils/localStorage';
import debugConfig from '../config/debug';
import gameReducer from './slices/gameSlice';
import achievementReducer from './slices/achievementSlice';
import inventoryReducer from './slices/inventorySlice';
import jesterReducer from './slices/jesterSlice';
import modalReducer from './slices/modalSlice';
import linkedButtonsReducer from './slices/linkedButtonsSlice';
import accordionReducer from './slices/accordionSlice';
import tutorialReducer from './slices/tutorialSlice';
import { achievementMiddleware } from './middleware/achievementMiddleware';
import { analyticsMiddleware } from './middleware/analyticsMiddleware';
import { historyMiddleware } from './middleware/historyMiddleware';

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
        tutorial: { completedSteps: state.tutorial.completedSteps }
      });
      localStorage.setItem('infiniteLevels_gameState_v2', serializedState);
    } catch (err) {
      console.error('Could not save state:', err);
    }
  }
  
  return result;
};

const preloadedState = !debugConfig.isDebugMode ? (() => {
  try {
    const serializedState = localStorage.getItem('infiniteLevels_gameState_v2');
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
    jester: jesterReducer,
    modal: modalReducer,
    linkedButtons: linkedButtonsReducer,
    accordion: accordionReducer,
    tutorial: tutorialReducer
  },
  preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(localStorageMiddleware)
      .concat(achievementMiddleware)
      .concat(analyticsMiddleware)
      .concat(historyMiddleware)
});

export * from './slices/gameSlice';
export * from './slices/achievementSlice';
export * from './slices/inventorySlice';
export * from './slices/jesterSlice';
export * from './slices/modalSlice';
export * from './slices/accordionSlice';
export * from './slices/tutorialSlice';