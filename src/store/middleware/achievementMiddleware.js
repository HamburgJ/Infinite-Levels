import { addAchievement, addNewlyOpenableShrine } from '../slices/achievementSlice';
import achievements from '../../data/achievements';
import { parseStoredLevel } from '../../utils/complex';
import CARDS from '../../data/cards';

export const achievementMiddleware = store => next => action => {
  const result = next(action);
  
  // Check for shrine unlocks when a new achievement is added
  if (action.type === 'achievements/addAchievement') {
    const state = store.getState();
    const achievementCount = Object.keys(state.achievements.achievements).length;
    const visitedShrines = state.achievements.visitedShrines || {};
    
    Object.values(visitedShrines).forEach(shrine => {
      if (!shrine.opened && achievementCount >= shrine.requiredCount) {
        store.dispatch(addNewlyOpenableShrine(shrine.level));
      }
    });
  }

  if (action.type === 'game/setCurrentLevel') {
    const state = store.getState();

    const level = action.payload;
    
    // Track infinity levels
    if (typeof level === 'string' && level.includes('Infinity')) {
      // Award achievement for first infinity level
      store.dispatch(addAchievement(achievements.INFINITY_LEVEL_REACHED));

      // Check for negative infinity achievement
      if (level.startsWith('-')) {
        store.dispatch(addAchievement(achievements.NEGATIVE_INFINITY_LEVEL_REACHED));
      }
    }

    // Get the real part of the level number for comparison
    const parsedLevel = parseStoredLevel(level);
    let levelNumber;
    if (typeof parsedLevel === 'number') {
      levelNumber = Math.abs(parsedLevel);
    } else if (typeof parsedLevel === 'object' && 'real' in parsedLevel) {
      levelNumber = Math.abs(parsedLevel.real);
    }

    // Check for rational number (non-integer decimal level)
    if (typeof parsedLevel === 'number' && !Number.isInteger(parsedLevel) && isFinite(parsedLevel)) {
      store.dispatch(addAchievement(achievements.RATIONAL_NUMBER));
      
      // Between the Lines — first visit to any handcrafted decimal level
      const HANDCRAFTED_DECIMALS = ['0.5', '0.25', '0.75', '0.333', '0.666', '0.999', '3.14159', '2.718', '1.618', '1.414', '3.52', '0.1', '1.5', '0.007', '0.2', '0.125', '2.5'];
      const levelStr = parsedLevel.toString();
      if (HANDCRAFTED_DECIMALS.includes(levelStr)) {
        store.dispatch(addAchievement(achievements.BETWEEN_THE_LINES));
      }
      
      // Decimal Explorer — visit 5 different decimal levels
      const visitedDecimals = state.game.visitedLevels.filter(v => {
        const parts = v.split('+');
        const real = parseFloat(parts[0]);
        return !isNaN(real) && !Number.isInteger(real) && isFinite(real);
      });
      if (visitedDecimals.length >= 5) {
        store.dispatch(addAchievement(achievements.DECIMAL_EXPLORER));
      }
    }

    // Check for irrational number level (known irrational constant keys)
    const IRRATIONAL_KEYS = ['3.14159', '2.718', '1.618', '1.414'];
    const currentLevelStr = typeof level === 'string' ? level : 
      (typeof level === 'object' && level.imag === 0) ? level.real.toString() :
      typeof level === 'number' ? level.toString() : '';
    if (IRRATIONAL_KEYS.includes(currentLevelStr)) {
      store.dispatch(addAchievement(achievements.IRRATIONAL_NUMBER));
    }

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

    // First Steps — visit 5 different levels
    if (state.game.visitedLevels.length >= 5) {
      store.dispatch(addAchievement(achievements.FIRST_STEPS));
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