import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    openModals: [],
  },
  reducers: {
    setModalOpen: (state, action) => {
      state.openModals.push(action.payload);
    },
    setModalClose: (state, action) => {
      state.openModals = state.openModals.filter(modal => modal !== action.payload);
    },
    setCloseAllModals: (state, action) => {
      state.openModals = [];
    }
  },
});

export const { setModalOpen, setModalClose, setCloseAllModals } = modalSlice.actions;
export default modalSlice.reducer; 