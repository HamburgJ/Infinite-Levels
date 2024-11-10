import { createSlice } from '@reduxjs/toolkit';

const linkedButtonsSlice = createSlice({
  name: 'linkedButtons',
  initialState: {
    activatedButtons: {}
  },
  reducers: {
    activateButton: (state, action) => {
      state.activatedButtons[action.payload] = true;
    }
  }
});

export const { activateButton } = linkedButtonsSlice.actions;
export default linkedButtonsSlice.reducer; 