import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentLocation: '11',
  phase: 'tutorial', // 'tutorial' or 'roaming'
  visitedPrimes: [],
  tutorialComplete: false
};

const jesterSlice = createSlice({
  name: 'jester',
  initialState,
  reducers: {
    setJesterLocation: (state, action) => {
      state.currentLocation = action.payload;
    },
    completeJesterTutorial: (state) => {
      state.phase = 'roaming';
      state.tutorialComplete = true;
      state.currentLocation = null;
    },
    markPrimeVisited: (state, action) => {
      const prime = action.payload;
      if (!state.visitedPrimes.includes(prime)) {
        state.visitedPrimes.push(prime);
      }
    }
  }
});

export const { setJesterLocation, completeJesterTutorial, markPrimeVisited } = jesterSlice.actions;
export default jesterSlice.reducer;