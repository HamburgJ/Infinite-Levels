import { createSlice } from '@reduxjs/toolkit';

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    currentLevel: { real: 0, imag: 0 },
    inventory: {
      buttons: [],
      money: 0,
      specialItems: []
    },
    discoveredMechanics: {
      numberEntry: false,
      clock: false,
      wallet: false,
      complexNumbers: false
    },
    timeBasedElements: {
      activeTimers: {},
      clockTime: null
    },
    levelState: {
      activeButtons: {},
      unstableLevels: []
    }
  },
  reducers: {
    setCurrentLevel: (state, action) => {
      if (typeof action.payload === 'number') {
        state.currentLevel = { real: action.payload, imag: 0 };
      } else {
        state.currentLevel = action.payload;
      }
    },
    completeLevel: (state, action) => {
      if (!state.completedLevels.includes(action.payload)) {
        state.completedLevels.push(action.payload);
      }
    },
    updatePlayerPosition: (state, action) => {
      state.playerState.position = action.payload;
    },
    updateInventory: (state, action) => {
      state.playerState.inventory = action.payload;
    },
    escapeLoop: (state) => {
      if (state.currentLevel.real >= 2 && state.currentLevel.real <= 4) {
        state.currentLevel = { real: 5, imag: 0 };
      }
    },
    addToInventory: (state, action) => {
      const { type, item } = action.payload;
      state.inventory[type].push(item);
    },
    removeFromInventory: (state, action) => {
      const { type, item } = action.payload;
      state.inventory[type] = state.inventory[type]
        .filter(i => i.id !== item.id);
    },
    markMechanicDiscovered: (state, action) => {
      const mechanicName = action.payload;
      state.discoveredMechanics[mechanicName] = true;
    },
    updateLevelStability: (state, action) => {
      const { levelId, isStable } = action.payload;
      if (!isStable) {
        state.levelState.unstableLevels.push(levelId);
      }
    }
  }
});

export const { 
  setCurrentLevel, 
  completeLevel, 
  updatePlayerPosition, 
  updateInventory, 
  escapeLoop, 
  addToInventory, 
  removeFromInventory, 
  markMechanicDiscovered, 
  updateLevelStability 
} = gameSlice.actions;

export default gameSlice.reducer; 