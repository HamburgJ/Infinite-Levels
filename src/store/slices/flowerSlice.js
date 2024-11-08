import { createSlice } from '@reduxjs/toolkit';
import flowerTypes from '../../data/flowerTypes';

const flowerSlice = createSlice({
  name: 'flower',
  initialState: {
    hasPlant: false,
    growthLevel: 0,
    lastVisitedLevel: null,
    flowerType: null
  },
  reducers: {
    plantSeed: (state) => {
      const types = Object.keys(flowerTypes);
      const randomType = types[Math.floor(Math.random() * types.length)];
      state.hasPlant = true;
      state.growthLevel = 0;
      state.flowerType = randomType;
    },
    incrementGrowth: (state) => {
      if (state.hasPlant) {
        state.growthLevel += 1;
      }
    },
    removePlant: (state) => {
      state.hasPlant = false;
      state.growthLevel = 0;
      state.flowerType = null;
    },
    setLastVisitedLevel: (state, action) => {
      state.lastVisitedLevel = action.payload;
    }
  }
});

export const { plantSeed, incrementGrowth, removePlant, setLastVisitedLevel } = flowerSlice.actions;
export default flowerSlice.reducer; 