import { createSlice } from '@reduxjs/toolkit';

/*
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
*/
const initialMoney = [

];

const initialState = {
  equippedItem: null,
  scale: null,
  bookshelf: Array(9).fill(null),
  money: initialMoney,
  coinSlots: {},
  heldText: {
    content: null,
    sourceId: null,
    index: null,
    level: null
  }
};

const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    equipItem: (state, action) => {
      state.equippedItem = action.payload;
    },
    unequipItem: (state) => {
      state.equippedItem = null;
      state.heldText = {
        content: null,
        sourceId: null,
        index: null,
        level: null
      };
    },
    addToScale: (state, action) => {
      state.scale = action.payload;
      state.heldText = {
        content: null,
        sourceId: null,
        index: null,
        level: null
      };
      state.equippedItem = null; 
    },
    removeFromScale: (state) => {
      state.scale = null;
    },
    addToBookshelf: (state, action) => {
      const { item, index } = action.payload;
      if (index >= 0 && index < 9) {
        state.bookshelf[index] = item;
      }
      state.heldText = {
        content: null,
        sourceId: null,
        index: null,
        level: null
      };
      state.equippedItem = null; 
    },
    removeFromBookshelf: (state, action) => {
      const { index } = action.payload;
      if (index >= 0 && index < 9) {
        state.bookshelf[index] = null;
      }
    },
    addCardToBox: (state, action) => {
      const { cardId, boxId } = action.payload;
      
      // Find the target card box (either equipped or in bookshelf)
      let cardBox = state.equippedItem?.type === 'card-box' ? 
        state.equippedItem : 
        state.bookshelf.find(item => item?.type === 'card-box');

      // If we specified a box ID, find that specific box
      if (boxId) {
        cardBox = state.equippedItem?.id === boxId ? 
          state.equippedItem : 
          state.bookshelf.find(item => item?.id === boxId);
      }

      if (cardBox) {
        if (!cardBox.collectedCards) {
          cardBox.collectedCards = {};
        }
        cardBox.collectedCards[cardId] = true;
      }
    },
    equipCard: (state, action) => {
      state.equippedItem = action.payload;
    },
    dropCard: (state, action) => {
      const { cardId, containerId } = action.payload;
      let container = state.equippedItem?.id === containerId ? 
        state.equippedItem :
        state.bookshelf.find(item => item?.id === containerId);
        
      if (container?.collectedCards) {
        delete container.collectedCards[cardId];
      }
    },
    swapEquippedItem: (state, action) => {
      const { newItem } = action.payload;
      state.equippedItem = newItem;
    },
    pickupText: (state, action) => {
      state.heldText = action.payload;
    },
    returnText: (state) => {
      state.heldText = {
        content: null,
        sourceId: null,
        index: null,
        level: null
      };
    },
    addMoneyToWallet: (state, action) => {
      const { value, id, slotId } = action.payload;
      state.money.push({ value, id });
      if (slotId) {
        state.coinSlots[slotId] = true;
      }
    },
    removeMoneyFromWallet: (state, action) => {
      const { id, slotId } = action.payload;
      state.money = state.money.filter(item => item.id !== id);
      if (slotId) {
        state.coinSlots[slotId] = false;
      }
    },
    setCoinInSlot: (state, action) => {
      const { slotId, hasValue } = action.payload;
      state.coinSlots[slotId] = hasValue;
    }
  }
});

export const { 
  equipItem, 
  unequipItem,
  addToScale,
  removeFromScale,
  addToBookshelf,
  removeFromBookshelf,
  addCardToBox,
  equipCard,
  dropCard,
  swapEquippedItem,
  pickupText,
  returnText,
  addMoneyToWallet,
  removeMoneyFromWallet,
  setCoinInSlot
} = inventorySlice.actions;

export default inventorySlice.reducer; 