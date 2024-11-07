import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
  },
  reducers: {
    setModalOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { setModalOpen } = modalSlice.actions;
export default modalSlice.reducer; 