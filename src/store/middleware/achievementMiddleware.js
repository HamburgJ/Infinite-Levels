import { addAchievement } from '../slices/achievementSlice';
import achievements from '../../data/achievements';
import { parseStoredLevel } from '../../utils/complex';
import CARDS from '../../data/cards';

export const achievementMiddleware = store => next => action => {
  const result = next(action);
  console.log('action', action);
  
  if (action.type === 'game/setCurrentLevel') {
    const state = store.getState();

    const level = action.payload;
    
    // Get the real part of the level number for comparison
    const parsedLevel = parseStoredLevel(level);
    let levelNumber;
    if (typeof parsedLevel === 'number') {
      levelNumber = Math.abs(parsedLevel);
    } else if (typeof parsedLevel === 'object' && 'real' in parsedLevel) {
      levelNumber = Math.abs(parsedLevel.real);
    }

    console.log('levelNumber', levelNumber);
    // Check for high-level achievements
    if (levelNumber) {
      // Define level thresholds and their corresponding achievements
      const levelAchievements = [
        { threshold: 100, achievement: achievements.LEVEL_100 },
        { threshold: 1000, achievement: achievements.LEVEL_1000 },
        { threshold: 1000000, achievement: achievements.LEVEL_1M },
        { threshold: 1000000000, achievement: achievements.LEVEL_1B },
        { threshold: Math.pow(10, 10), achievement: achievements.LEVEL_10B10 },
        { threshold: Math.pow(10, 100), achievement: achievements.LEVEL_GOOGOL }
      ].sort((a, b) => b.threshold - a.threshold); // Sort in descending order

      // Find the highest threshold reached and award all achievements up to that point
      for (const { threshold, achievement } of levelAchievements) {
        if (levelNumber >= threshold) {
          // Award this achievement and all lower ones
          levelAchievements
            .filter(la => la.threshold <= threshold)
            .forEach(la => store.dispatch(addAchievement(la.achievement)));
          break;
        }
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
  
  if (action.type === 'inventory/addToCardBox') {
    const state = store.getState();
    const cardCollection = state.inventory.cardBox;
    
    // Check for full suits
    const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    for (const suit of suits) {
      const suitCards = Object.values(cardCollection).filter(card => 
        CARDS[card.cardId]?.suit === suit
      );
      if (suitCards.length === 4) { // Assuming 4 cards per suit
        store.dispatch(addAchievement(achievements.FULL_SUIT));
        break;
      }
    }
  }
  
  // Track Jester encounters
  if (action.type === 'jester/setJesterLocation') {
    const state = store.getState();
    const jesterEncounters = state.game.jesterEncounters || 0;
    
    // Define thresholds and their corresponding achievements
    const jesterAchievements = [
      { threshold: 5, achievement: achievements.JESTER_FRIEND },
      { threshold: 10, achievement: achievements.JESTER_BUDDY },
      { threshold: 20, achievement: achievements.JESTER_COMPANION },
      { threshold: 30, achievement: achievements.JESTER_CONFIDANT },
      { threshold: 50, achievement: achievements.JESTER_MASTER },
      { threshold: 100, achievement: achievements.JESTER_LEGEND }
    ].sort((a, b) => b.threshold - a.threshold); // Sort in descending order

    // Find the highest threshold reached and award all achievements up to that point
    for (const { threshold, achievement } of jesterAchievements) {
      if (jesterEncounters >= threshold) {
        // Award this achievement and all lower ones
        jesterAchievements
          .filter(ja => ja.threshold <= threshold)
          .forEach(ja => store.dispatch(addAchievement(ja.achievement)));
        break;
      }
    }
  }
  
  return result;
}; 