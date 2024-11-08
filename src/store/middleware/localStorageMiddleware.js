import { saveGameState } from '../../utils/localStorage';
import debugConfig from '../../config/debug';

export const localStorageMiddleware = store => next => action => {
  const result = next(action);
  
  if (!debugConfig.isDebugMode) {
    const state = store.getState();
    saveGameState({
      game: state.game,
      achievements: state.achievements,
      inventory: state.inventory,
      flower: state.flower
    });
  }
  
  return result;
}; 