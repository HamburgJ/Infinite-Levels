import { createSlice } from '@reduxjs/toolkit';

const flowerSlice = createSlice({
  name: 'flower',
  initialState: {
    hasPlant: false,
    growthLevel: 0,
    lastVisitedLevel: null
  },
  reducers: {
    plantSeed: (state) => {
      state.hasPlant = true;
      state.growthLevel = 0;
    },
    incrementGrowth: (state) => {
      if (state.hasPlant) {
        state.growthLevel += 1;
      }
    },
    removePlant: (state) => {
      state.hasPlant = false;
      state.growthLevel = 0;
    },
    setLastVisitedLevel: (state, action) => {
      state.lastVisitedLevel = action.payload;
    }
  }
});

export const { plantSeed, incrementGrowth, removePlant, setLastVisitedLevel } = flowerSlice.actions;
export default flowerSlice.reducer; 