import { setCurrentLevel } from '../slices/gameSlice';
import { incrementGrowth, setLastVisitedLevel } from '../slices/flowerSlice';
import { levelToString } from '../../utils/complex';

export const flowerMiddleware = store => next => action => {
  const result = next(action);
  
  if (action.type === setCurrentLevel.type) {
    const state = store.getState();
    const currentLevel = levelToString(action.payload);
    const lastLevel = state.flower.lastVisitedLevel;
    
    if (lastLevel && currentLevel !== lastLevel) {
      store.dispatch(incrementGrowth());
    }
    
    store.dispatch(setLastVisitedLevel(currentLevel));
  }
  
  return result;
}; 