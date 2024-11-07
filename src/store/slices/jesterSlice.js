import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentLocation: '0'
};

const jesterSlice = createSlice({
  name: 'jester',
  initialState,
  reducers: {
    setJesterLocation: (state, action) => {
      state.currentLocation = action.payload;
    }
  }
});

export const { setJesterLocation } = jesterSlice.actions;
export default jesterSlice.reducer; 