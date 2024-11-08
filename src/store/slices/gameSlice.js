import { createSlice } from '@reduxjs/toolkit';
import achievements from '../../data/achievements';
import { addAchievement } from '../slices/achievementSlice';
import debugConfig from '../../config/debug';

const levelToString = level => {
  if (typeof level === 'number') {
    return `${level}+0i`;
  }
  if (typeof level === 'object' && 'real' in level) {
    return `${level.real}+${level.imag}i`;
  }
  return level;
};

const tutorialLevels = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(level => `${level}+0i`));

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    currentLevel: debugConfig.isDebugMode && debugConfig.debugFeatures.startAtDemoLevel ? 'Demo' : '0',
    levelHistory: [],
    tutorialLevelsVisited: [],
    inventory: {
      buttons: [],
      money: 0,
      specialItems: []
    },
    discoveredMechanics: {
      numberEntry: debugConfig.isDebugMode,
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
    },
    hintsOpened: []
  },
  reducers: {
    setCurrentLevel: (state, action) => {
      const previousLevel = state.currentLevel;
      const newLevel = action.payload;

      let formattedNewLevel;
      if (typeof newLevel === 'number') {
        formattedNewLevel = { real: newLevel, imag: 0 };
      } else {
        formattedNewLevel = newLevel;
      }
      
      if (JSON.stringify(previousLevel) !== JSON.stringify(formattedNewLevel)) {
        state.levelHistory.push(formattedNewLevel);
        
        if (state.levelHistory.length > 10) {
          state.levelHistory.shift();
        }

        const levelStr = levelToString(formattedNewLevel);
        if (tutorialLevels.has(levelStr) && !state.tutorialLevelsVisited.includes(levelStr)) {
          state.tutorialLevelsVisited.push(levelStr);
        }
      }

      state.currentLevel = formattedNewLevel;
      state.levelChanged = true;
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
    },
    markHintOpened: (state, action) => {
      const levelKey = levelToString(action.payload);
      if (!state.hintsOpened.includes(levelKey)) {
        state.hintsOpened.push(levelKey);
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
  updateLevelStability, 
  markHintOpened 
} = gameSlice.actions;

export default gameSlice.reducer; 