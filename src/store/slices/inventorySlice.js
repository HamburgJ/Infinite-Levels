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
    money: initialMoney,
    cards: {},
    heldText: {
      content: null,
      sourceId: null,
      index: null,
      level: null
    }
  },
  reducers: {
    equipItem: (state, action) => {
      state.equippedItem = action.payload;
      const itemId = action.payload.id || action.payload.value;
      state.collectedItems[itemId] = true;
    },
    unequipItem: (state) => {
      if (state.equippedItem?.type === 'card-box') {
        Object.keys(state.cards).forEach(cardId => {
          if (state.cards[cardId]) {
            state.cards[cardId] = false;
          }
        });
      }

      if (state.equippedItem) {
        const itemId = state.equippedItem.id || state.equippedItem.value;
        state.collectedItems[itemId] = false;
      }
      state.equippedItem = null;
      state.heldText = {
        content: null,
        sourceId: null,
        index: null,
        level: null
      };
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
    },
    pickupText: (state, action) => {
      const { text, sourceId, index, level} = action.payload;
      // if an item is already equipped, do nothing
      if (state.equippedItem) return;
      state.equippedItem = {
        type: 'text',
        content: text,
        sourceId: sourceId,
        index: index,
        id: `text-${Date.now()}`
      };
      state.heldText = {
        content: text,
        sourceId: sourceId,
        index: index,
        level: level
      };
    },
    returnText: (state) => {
      if (state.equippedItem?.type === 'text') {
        state.equippedItem = null;
      }
      state.heldText = {
        content: null,
        sourceId: null,
        index: null,
        level: null
      };
    },
    swapEquippedItem: (state, action) => {
      if (!action.payload) return;
      
      if (state.equippedItem?.type === 'card-box') {
        Object.keys(state.cards).forEach(cardId => {
          if (state.cards[cardId]) {
            state.cards[cardId] = false;
          }
        });
      }

      if (state.equippedItem) {
        const oldItemId = state.equippedItem.id || state.equippedItem.value;
        state.collectedItems[oldItemId] = false;
      }
      
      state.equippedItem = action.payload;
      const newItemId = action.payload.id || action.payload.value;
      state.collectedItems[newItemId] = true;
      
      state.heldText = {
        content: null,
        sourceId: null,
        index: null,
        level: null
      };
    },
    collectCard: (state, action) => {
      const { cardId } = action.payload;
      state.cards[cardId] = true;
      if (state.equippedItem?.type === 'card' && state.equippedItem.id === cardId) {
        state.equippedItem = null;
      }
    },
    dropCard: (state, action) => {
      const { cardId } = action.payload;
      delete state.cards[cardId];
    }
  }
});

export const { 
  equipItem, 
  unequipItem,
  addToInventory,
  removeFromInventory,
  pickupText,
  returnText,
  swapEquippedItem,
  collectCard,
  dropCard
} = inventorySlice.actions;

export default inventorySlice.reducer; 