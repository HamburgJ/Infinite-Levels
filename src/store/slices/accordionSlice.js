import { createSlice } from '@reduxjs/toolkit';

const accordionSlice = createSlice({
  name: 'accordion',
  initialState: {
    levelStates: {}
  },
  reducers: {
    toggleSection: (state, action) => {
      const { level, sectionPath } = action.payload;
      if (!state.levelStates[level]) {
        state.levelStates[level] = { openSections: [], visitedSections: [] };
      }
      
      const index = state.levelStates[level].openSections.indexOf(sectionPath);
      if (index === -1) {
        state.levelStates[level].openSections.push(sectionPath);
      } else {
        state.levelStates[level].openSections.splice(index, 1);
      }
    },
    markSectionVisited: (state, action) => {
      const { level, sectionPath } = action.payload;
      if (!state.levelStates[level]) {
        state.levelStates[level] = { openSections: [], visitedSections: [] };
      }
      
      if (!state.levelStates[level].visitedSections.includes(sectionPath)) {
        state.levelStates[level].visitedSections.push(sectionPath);
      }
    }
  }
});

export const { toggleSection, markSectionVisited } = accordionSlice.actions;
export default accordionSlice.reducer; 