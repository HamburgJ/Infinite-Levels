import { addAchievement } from '../slices/achievementSlice';
import achievements from '../../data/achievements';

export const achievementMiddleware = store => next => action => {
  const result = next(action);
  
  if (action.type === 'game/setCurrentLevel') {
    const state = store.getState();
    const level = action.payload;
    
    // Get the real part of the level number for comparison
    let levelNumber;
    if (typeof level === 'number') {
      levelNumber = Math.abs(level);
    } else if (typeof level === 'object' && 'real' in level) {
      levelNumber = Math.abs(level.real);
    }

    // Check for high-level achievements
    if (levelNumber) {
      if (levelNumber >= 100) {
        store.dispatch(addAchievement(achievements.LEVEL_100));
      }
      if (levelNumber >= 1000) {
        store.dispatch(addAchievement(achievements.LEVEL_1000));
      }
      if (levelNumber >= 1000000) {
        store.dispatch(addAchievement(achievements.LEVEL_1M));
      }
      if (levelNumber >= 1000000000) {
        store.dispatch(addAchievement(achievements.LEVEL_1B));
      }
      if (levelNumber >= Math.pow(10, 10)) {
        store.dispatch(addAchievement(achievements.LEVEL_10B10));
      }
      if (levelNumber >= Math.pow(10, 100)) {
        store.dispatch(addAchievement(achievements.LEVEL_GOOGOL));
      }
    }

    // Existing tutorial completion check
    const tutorialLevels = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(level => `${level}+0i`));
    
    const hasCompletedTutorial = [...tutorialLevels].every(level => 
      state.game.tutorialLevelsVisited.includes(level)
    );

    if (hasCompletedTutorial) {
      store.dispatch(addAchievement(achievements.TUTORIAL_COMPLETE));
    }
  }
  
  if (action.type === 'game/markHintOpened') {
    const state = store.getState();
    if (state.game.hintsOpened.length >= 10) {
      store.dispatch(addAchievement(achievements.HINT_EXPLORER));
    }
  }
  
  return result;
}; 