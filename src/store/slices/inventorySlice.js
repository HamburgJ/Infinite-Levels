import { createSlice } from '@reduxjs/toolkit';

const initialMoney = [
  { value: 10000, id: 'initial-100' },  // $100
  { value: 5000, id: 'initial-50' },    // $50
  { value: 2000, id: 'initial-20' },    // $20
  { value: 1000, id: 'initial-10' },    // $10
  { value: 500, id: 'initial-5' },      // $5
  { value: 25, id: 'initial-25c' },     // 25¢
  { value: 10, id: 'initial-10c' },     // 10¢
  { value: 5, id: 'initial-5c' },       // 5¢
  { value: 1, id: 'initial-1c' }        // 1¢
];

const inventorySlice = createSlice({
  name: 'inventory',
  initialState: {
    equippedItem: null,
    items: [],
    collectedItems: {},
    money: initialMoney
  },
  reducers: {
    equipItem: (state, action) => {
      state.equippedItem = action.payload;
      const itemId = action.payload.id || action.payload.value;
      state.collectedItems[itemId] = true;
    },
    unequipItem: (state) => {
      if (state.equippedItem) {
        const itemId = state.equippedItem.id || state.equippedItem.value;
        state.collectedItems[itemId] = false;
      }
      state.equippedItem = null;
    },
    addToInventory: (state, action) => {
      if (action.payload.type === 'money') {
        state.money.push(action.payload);
      } else {
        state.items.push(action.payload);
      }
    },
    removeFromInventory: (state, action) => {
      if (action.payload.type === 'money') {
        const index = state.money.findIndex(item => 
          item.value === action.payload.value && 
          (!action.payload.id || item.id === action.payload.id)
        );
        if (index !== -1) {
          state.money.splice(index, 1);
        }
      } else {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      }
    }
  }
});

export const { 
  equipItem, 
  unequipItem,
  addToInventory,
  removeFromInventory
} = inventorySlice.actions;

export default inventorySlice.reducer; 