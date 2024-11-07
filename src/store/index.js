import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import gameReducer, { 
  setCurrentLevel, 
  markMechanicDiscovered, 
  updateLevelStability,
  addToInventory,
  removeFromInventory 
} from './slices/gameSlice';
import inventoryReducer, { 
  equipItem, 
  unequipItem,
  addToScale,
  removeFromScale,
  addToBookshelf,
  removeFromBookshelf,
  dropCard,
  swapEquippedItem,
  pickupText,
  returnText
} from './slices/inventorySlice';
import achievementReducer, { 
  addAchievement, 
  clearRecentAchievement 
} from './slices/achievementSlice';
import jesterReducer from './slices/jesterSlice';
import flowerReducer from './slices/flowerSlice';
import { flowerMiddleware } from './middleware/flowerMiddleware';

export const store = configureStore({
  reducer: {
    game: gameReducer,
    inventory: inventoryReducer,
    achievements: achievementReducer,
    jester: jesterReducer,
    flower: flowerReducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(flowerMiddleware)
});

export {
  setCurrentLevel,
  markMechanicDiscovered,
  updateLevelStability,
  equipItem,
  unequipItem,
  addToScale,
  removeFromScale,
  addToBookshelf,
  removeFromBookshelf,
  dropCard,
  swapEquippedItem,
  pickupText,
  returnText,
  addToInventory,
  removeFromInventory,
  addAchievement,
  clearRecentAchievement
};

export default store;