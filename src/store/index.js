import { configureStore } from '@reduxjs/toolkit';
import gameReducer, { 
  setCurrentLevel, 
  markMechanicDiscovered, 
  updateLevelStability 
} from './slices/gameSlice';
import inventoryReducer, { 
  equipItem, 
  unequipItem,
  addToInventory, 
  removeFromInventory,
  pickupText,
  returnText
} from './slices/inventorySlice';
import achievementReducer, { 
  addAchievement, 
  clearRecentAchievement 
} from './slices/achievementSlice';
import jesterReducer from './slices/jesterSlice';

export const store = configureStore({
  reducer: {
    game: gameReducer,
    inventory: inventoryReducer,
    achievements: achievementReducer,
    jester: jesterReducer
  }
});

export {
  setCurrentLevel,
  markMechanicDiscovered,
  updateLevelStability,
  equipItem,
  unequipItem,
  addToInventory,
  removeFromInventory,
  addAchievement,
  clearRecentAchievement,
  pickupText,
  returnText
};

export default store;