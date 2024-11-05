import { configureStore } from '@reduxjs/toolkit';
import gameReducer, { 
  setCurrentLevel, 
  markMechanicDiscovered, 
  updateLevelStability 
} from './slices/gameSlice';
import inventoryReducer, { 
  equipItem,
  addToInventory,
  removeFromInventory 
} from './slices/inventorySlice';
import achievementReducer, { 
  addAchievement, 
  clearRecentAchievement 
} from './slices/achievementSlice';

export const store = configureStore({
  reducer: {
    game: gameReducer,
    inventory: inventoryReducer,
    achievements: achievementReducer
  }
});

export {
  setCurrentLevel,
  markMechanicDiscovered,
  updateLevelStability,
  equipItem,
  addToInventory,
  removeFromInventory,
  addAchievement,
  clearRecentAchievement
};