import { createSlice } from '@reduxjs/toolkit';

const TUTORIAL_STOPS = ['11', '8', '9'];

const initialState = {
  currentLocation: '11',
  phase: 'tutorial', // 'tutorial' or 'roaming'
  visitedPrimes: [],
  tutorialComplete: false,
  visitedTutorialStops: []
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
    },
    markTutorialStopVisited: (state, action) => {
      const stop = action.payload;
      if (!state.visitedTutorialStops.includes(stop)) {
        state.visitedTutorialStops.push(stop);
      }
      // If all tutorial stops visited, complete the tutorial
      if (TUTORIAL_STOPS.every(s => state.visitedTutorialStops.includes(s))) {
        state.phase = 'roaming';
        state.tutorialComplete = true;
        state.currentLocation = null;
      }
    }
  }
});

export const { setJesterLocation, completeJesterTutorial, markPrimeVisited, markTutorialStopVisited } = jesterSlice.actions;
export { TUTORIAL_STOPS };
export default jesterSlice.reducer;