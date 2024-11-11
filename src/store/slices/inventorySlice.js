import { createSlice } from '@reduxjs/toolkit';
import { generateUniqueId } from '../../utils/idGenerator';
import CARDS from '../../data/cards';

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
const initialCardBoxContents = Object.fromEntries(Object.values(CARDS).map(card => [card.id, 0]));

const initialState = {
  equippedItem: null,
  scale: null,
  bookshelf: Array(9).fill(null),
  walletDenominations: {
    1: 0,    // 1¢
    5: 0,    // 5¢
    10: 0,   // 10¢
    25: 0,   // 25¢
    500: 0,  // $5
    1000: 0, // $10
    2000: 0, // $20
    5000: 0, // $50
    10000: 0 // $100
  },
  collectedCoinBills: {}, //contains a unique id as key, denomination as value
  cardBoxContents: initialCardBoxContents,
  collectedCards: {}, // Will store the original collectableId -> cardId mapping
  textSlices: {}, // Keyed by sourceId, contains array of slices with start, end, and text
  characterMaps: {}, // Will store sourceId -> array of {char, originalIndex, hidden} objects
};
const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    addToWallet: (state, action) => {
      const { value } = action.payload;
      state.walletDenominations[value]++;
    },

    removeFromWallet: (state, action) => {
      const { value, amount = 1 } = action.payload;
      state.walletDenominations[value] = Math.max(0, state.walletDenominations[value] - amount);
    },

    collectCoinBill: (state, action) => {
      const { id } = action.payload;
      if (!state.collectedCoinBills.includes(id)) {
        state.collectedCoinBills.push(id);
      }
    },

    uncollectCoinBill: (state, action) => {
      const { id } = action.payload;
      state.collectedCoinBills = state.collectedCoinBills.filter(coinId => coinId !== id);
    },

    equipItem: (state, action) => {
      const { fromStorage, ...item } = action.payload;
      
      if (fromStorage) {
        // Remove from storage locations
        const shelfIndex = state.bookshelf.findIndex(storageItem => 
          storageItem?.type === item.type && storageItem.id === item.id
        );
        if (shelfIndex !== -1) {
          state.bookshelf[shelfIndex] = null;
        }

        if (state.scale?.type === item.type && state.scale.id === item.id) {
          state.scale = null;
        }
      }

      state.equippedItem = item;
    },

    unequipItem: (state) => {
      if (state.equippedItem?.type === 'currency' && state.equippedItem?.originalCoinId) {
        const slotId = state.equippedItem.id;
        const originalCoinId = state.equippedItem.originalCoinId;
        
        // Remove from money array
        state.money = state.money.filter(m => m.originalCoinId !== originalCoinId);
        
        // Clear coin slot
        delete state.coinSlots[slotId];
        
        // Mark as uncollected
        delete state.collectedCoins[slotId];
      }

      state.equippedItem = null;
      state.heldText = {
        content: null,
        sourceId: null,
        index: null,
        level: null
      };
      console.log("INSIDE UNEQUIP ITEM", state);
    },

    addToScale: (state, action) => {
      const { item } = action.payload;
      
      console.log('Adding to scale:', {
        item,
        characterIndices: item.characterIndices,
        sourceId: item.sourceId
      });
      
      // Only add text-specific fields if type is text
      state.scale = {
        ...item,
        ...(item.type === 'text' && {
          characterIndices: item.characterIndices,
          id: `text-${Date.now()}`, // Ensure unique ID for scale items
        })
      };

      console.log('Scale after adding item:', {
        storedItem: state.scale,
        characterMap: state.characterMaps[item.sourceId]
      });
    },

    removeFromScale: (state) => {
      state.scale = null;
    },

    addToBookshelf: (state, action) => {
      const { item, index } = action.payload;
      
      console.log('Adding to bookshelf:', {
        item,
        index,
        characterIndices: item.characterIndices,
        sourceId: item.sourceId
      });
      
      // Only add text-specific fields if type is text
      state.bookshelf[index] = {
        ...item,
        ...(item.type === 'text' && {
          characterIndices: item.characterIndices,
          id: `text-${Date.now()}`, // Ensure unique ID for bookshelf items
        })
      };

      console.log('Bookshelf after adding item:', {
        storedItem: state.bookshelf[index],
        characterMap: state.characterMaps[item.sourceId]
      });
    },

    removeFromBookshelf: (state, action) => {
      const { index } = action.payload;
      if (index >= 0 && index < 9) {
        state.bookshelf[index] = null;
      }
    },

    addCardToBox: (state, action) => {
      const { cardId } = action.payload;
      state.cardBoxContents[cardId] = true;
    },

    clearCardBox: (state) => {
      state.cardBoxContents = {};
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

    dropItem: (state, action) => {
      const itemToDrop = state.equippedItem;
      if (!itemToDrop) return;

      if (itemToDrop.type === 'text') {
        const { sourceId, text } = itemToDrop;
        
        // Calculate indices if they're not present
        const characterIndices = itemToDrop.characterIndices || 
          Array.from({ length: text.length }, (_, i) => i);
        
        console.log("Dropping text item with indices:", characterIndices);
        
        // Check if this was the last text item with this sourceId
        const hasOtherTextsWithSourceId = state.bookshelf.some(item => 
          item?.type === 'text' && 
          item.sourceId === sourceId
        );

        if (!hasOtherTextsWithSourceId) {
          console.log("Removing character map for sourceId:", sourceId);
          delete state.characterMaps[sourceId];
        } else if (state.characterMaps[sourceId]) {
          characterIndices.forEach(index => {
            if (state.characterMaps[sourceId][index]) {
              state.characterMaps[sourceId][index].hidden = false;
            }
          });
        }
      }

      state.equippedItem = null;
    },

    swapEquippedItem: (state, action) => {
      const { newItem } = action.payload;
      state.equippedItem = newItem;
      console.log("INSIDE SWAP EQUIPPED ITEM", state);
    },

    pickupText: (state, action) => {
      const { sourceId, characterIndices } = action.payload;
      
      // Mark selected characters as hidden in the character map
      if (state.characterMaps[sourceId] && characterIndices) {
        state.characterMaps[sourceId].forEach(char => {
          if (characterIndices.includes(char.originalIndex)) {
            char.hidden = true;
          }
        });
      }

      state.equippedItem = action.payload;
    },

    returnText: (state) => {
      state.heldText = {
        content: null,
        sourceId: null,
        index: null,
        level: null
      };
    },
    exchangeMoney: (state, action) => {
      const { give, get } = action.payload;// eg. give = {5: 5} get = {25: 1} means give 5x5c and get 1x25c
      Object.entries(give).forEach(([denom, count]) => {
        state.walletDenominations[denom] = Math.max(0, state.walletDenominations[denom] - count);
      });
      Object.entries(get).forEach(([denom, count]) => {
        state.walletDenominations[denom] = Math.max(0, state.walletDenominations[denom] + count);
      });
      console.log("INSIDE EXCHANGE MONEY", state);
    },

    rightClickCoin: (state, action) => {
      const { value, collectableCoinBillId, fromStorage, fromInventory } = action.payload;
      const isCollected = collectableCoinBillId in state.collectedCoinBills;

      const removeFromStorage = () => {
        // Check and remove from bookshelf
        const shelfIndex = state.bookshelf.findIndex(item => 
          item?.type === 'currency' && item.id === collectableCoinBillId
        );
        if (shelfIndex !== -1) {
          state.bookshelf[shelfIndex] = null;
        }

        // Check and remove from scale
        if (state.scale?.type === 'currency' && state.scale.id === collectableCoinBillId) {
          state.scale = null;
        }
      };

      if (fromInventory) {
        //do nothing
        return;
      }

      if (state.equippedItem?.type === 'wallet') {
        if (fromStorage) {
          state.walletDenominations[value]++;
          removeFromStorage();
        } else if (isCollected) {
          state.walletDenominations[value]--;
          delete state.collectedCoinBills[collectableCoinBillId];
        } else if (!isCollected) {
          state.walletDenominations[value]++;
          state.collectedCoinBills[collectableCoinBillId] = value;
        }
      } else if (state.equippedItem === null) {
        if (fromStorage || !isCollected) {
          // Only mark as collected if not from storage
          if (!fromStorage) {
            state.collectedCoinBills[collectableCoinBillId] = value;
          }
          
          state.equippedItem = {
            type: 'currency',
            value,
            id: collectableCoinBillId
          };
          
          if (fromStorage) {
            removeFromStorage();
          }
        }
      }
    },

    leftClickCoin: (state, action) => {
      const { value, collectableCoinBillId, fromStorage, fromInventory } = action.payload;
      const isCollected = collectableCoinBillId in state.collectedCoinBills;

      if (fromInventory) {
        //do nothing
        return;
      }

      if (!isCollected && !fromStorage) return;

      if (state.equippedItem?.type === 'wallet') {
        if (state.walletDenominations[value] > 0) {
          state.walletDenominations[value]--;
          if (!fromStorage) {
            delete state.collectedCoinBills[collectableCoinBillId];
          }
        }
      }

      if (state.equippedItem?.type === 'currency') {
        if (state.equippedItem.value === value) {
          state.equippedItem = null;
          if (!fromStorage) {
            delete state.collectedCoinBills[collectableCoinBillId];
          }
        }
      }
      console.log("INSIDE LEFT CLICK COIN", state);
    },

    rightClickCard: (state, action) => {
      const { cardId, collectableCardId, fromStorage, fromInventory } = action.payload;
      const isCollected = collectableCardId in state.collectedCards;

      // Helper function to remove card from storage locations
      const removeFromStorage = () => {
        // Check and remove from bookshelf
        const shelfIndex = state.bookshelf.findIndex(item => 
          item?.type === 'card' && item.collectableCardId === collectableCardId
        );
        if (shelfIndex !== -1) {
          state.bookshelf[shelfIndex] = null;
        }

        // Check and remove from scale
        if (state.scale?.type === 'card' && state.scale.collectableCardId === collectableCardId) {
          state.scale = null;
        }
      };

      if (fromInventory) {
        //do nothing
        return;
      }

      if (state.equippedItem?.type === 'card-box') {
        if (fromStorage) {
          state.cardBoxContents[cardId]++;
          removeFromStorage();
        } else if (isCollected && state.cardBoxContents[cardId] > 0) {
          delete state.collectedCards[collectableCardId];
          state.cardBoxContents[cardId]--;
        } else if (!isCollected) {
          state.collectedCards[collectableCardId] = cardId;
          state.cardBoxContents[cardId]++;
        }
      } else if (state.equippedItem?.type === 'card') {
        if (isCollected && state.equippedItem?.collectableCardId === collectableCardId) {
          if (!fromStorage) {
            delete state.collectedCards[collectableCardId];
          }
          state.equippedItem = null;
        }
      } else if (state.equippedItem === null) {
        if (fromStorage || !isCollected) {
          state.collectedCards[collectableCardId] = cardId;
          state.equippedItem = {
            type: 'card',
            id: generateUniqueId(),
            collectableCardId,
            ...CARDS[cardId]
          };
          if (fromStorage) {
            removeFromStorage();
          }
        }
      }
    },

    leftClickCard: (state, action) => {
      const { cardId, collectableCardId, fromStorage, fromInventory } = action.payload;
      const isCollected = collectableCardId in state.collectedCards;

      if (fromInventory) {
        //do nothing
        return;
      }

      if (!isCollected && !fromStorage) return;

      if (state.equippedItem?.type === 'card-box') {
        if (cardId in state.cardBoxContents) {
          state.cardBoxContents[cardId]--;
          if (state.cardBoxContents[cardId] <= 0) {
            delete state.cardBoxContents[cardId];
          }
          if (!fromStorage) {
            delete state.collectedCards[collectableCardId];
          }
        }
      }

      if (state.equippedItem?.type === 'card') {
        if (state.equippedItem.collectableCardId === collectableCardId) {
          state.equippedItem = null;
          if (!fromStorage) {
            delete state.collectedCards[collectableCardId];
          }
        }
      }
    },

    addToCardBox: (state, action) => {
      const { cardId } = action.payload;
      const card = CARDS[cardId];
      
      if (!card) return;
      
      state.cardBoxContents[cardId] = (state.cardBoxContents[cardId] || 0) + 1;
      state.collectedCards[cardId] = {
        cardId,
        ...card
      };
    },

    removeFromCardBox: (state, action) => {
      const { cardId, amount = 1 } = action.payload;
      if (state.cardBoxContents[cardId]) {
        state.cardBoxContents[cardId] = Math.max(0, state.cardBoxContents[cardId] - amount);
        if (state.cardBoxContents[cardId] === 0) {
          delete state.cardBoxContents[cardId];
        }
      }
    },

    rightClickFlower: (state, action) => {
      const { flowerItem, fromStorage, fromInventory } = action.payload;
      const removeFromStorage = () => {
        // Check and remove from bookshelf
        const shelfIndex = state.bookshelf.findIndex(item => 
          item?.type === 'flower' && item.flowerType === flowerItem.flowerType && item.growthLevel === flowerItem.growthLevel
        );
        if (shelfIndex !== -1) {
          state.bookshelf[shelfIndex] = null;
        }

        // Check and remove from scale
        if (state.scale?.type === 'flower' && state.scale.flowerType === flowerItem.flowerType && state.scale.growthLevel === flowerItem.growthLevel) {
          state.scale = null;
        } 
      };

      if (fromInventory) {
        return;
      }

      if (state.equippedItem === null) {
        state.equippedItem = flowerItem;
        if (fromStorage) {
          removeFromStorage();
        }
      }
    },

    leftClickFlower: (state, action) => {
      const { flowerItem, fromStorage, fromInventory } = action.payload;
      
      const removeFromStorage = () => {
        // Check and remove from bookshelf
        const shelfIndex = state.bookshelf.findIndex(item => 
          item?.type === 'flower' && item.flowerType === flowerItem.flowerType && item.growthLevel === flowerItem.growthLevel
        );
        if (shelfIndex !== -1) {
          state.bookshelf[shelfIndex] = null;
        }

        // Check and remove from scale
        if (state.scale?.type === 'flower' && state.scale.flowerType === flowerItem.flowerType && state.scale.growthLevel === flowerItem.growthLevel) {
          state.scale = null;
        }
      };

      if (fromInventory) {
        return;
      }
      if (state.equippedItem === null) {
        state.equippedItem = flowerItem;
        if (fromStorage) {
          removeFromStorage();
        }
      }
    },

    rightClickLevelButton: (state, action) => {
      const { buttonItem, fromStorage, fromInventory } = action.payload;
      
      const removeFromStorage = () => {
        // Check and remove from bookshelf
        const shelfIndex = state.bookshelf.findIndex(item => 
          item?.type === 'levelButton' && item.value === buttonItem.value
        );
        if (shelfIndex !== -1) {
          state.bookshelf[shelfIndex] = null;
        }

        // Check and remove from scale
        if (state.scale?.type === 'levelButton' && state.scale.value === buttonItem.value) {
          state.scale = null;
        }
      };

      if (fromInventory) {
        return;
      }

      if (state.equippedItem === null) {
        state.equippedItem = buttonItem;
        if (fromStorage) {
          removeFromStorage();
        }
      }
    },

    leftClickLevelButton: (state, action) => {
      const { buttonItem, fromStorage, fromInventory } = action.payload;
      
      const removeFromStorage = () => {
        // Check and remove from bookshelf
        const shelfIndex = state.bookshelf.findIndex(item => 
          item?.type === 'levelButton' && item.value === buttonItem.value
        );
        if (shelfIndex !== -1) {
          state.bookshelf[shelfIndex] = null;
        }

        // Check and remove from scale
        if (state.scale?.type === 'levelButton' && state.scale.value === buttonItem.value) {
          state.scale = null;
        }
      };

      if (fromInventory) {
        return;
      }

      if (state.equippedItem === null) {
        state.equippedItem = buttonItem;
        if (fromStorage) {
          removeFromStorage();
        }
      }
    },

    rightClickText: (state, action) => {
      const { textItem, fromStorage } = action.payload;
      
      if (fromStorage) {
        const { sourceId, text } = textItem;
        
        // Instead of calculating new indices, we should preserve the original ones
        const storedItem = state.bookshelf.find(item => 
          item?.type === 'text' &&
          item?.sourceId === textItem.sourceId && 
          item?.text === textItem.text
        ) || (state.scale?.type === 'text' &&
          state.scale?.sourceId === textItem.sourceId && 
          state.scale?.text === textItem.text ? state.scale : null
        );
        
        if (storedItem?.characterIndices) {
          textItem.characterIndices = storedItem.characterIndices;
          
          // Re-hide the characters using the preserved indices
          if (state.characterMaps[sourceId]) {
            textItem.characterIndices.forEach(index => {
              if (state.characterMaps[sourceId][index]) {
                state.characterMaps[sourceId][index].hidden = true;
              }
            });
          }
        }
      }

      // Remove from bookshelf if found
      const shelfIndex = state.bookshelf.findIndex(item => 
        item?.sourceId === textItem.sourceId && 
        item?.text === textItem.text
      );
      
      if (shelfIndex !== -1) {
        state.bookshelf[shelfIndex] = null;
      }

      state.equippedItem = textItem;
    },

    leftClickText: (state, action) => {
      const { textItem, fromStorage, fromInventory } = action.payload;
      
      const removeFromStorage = () => {
        // Similar to rightClickText
        const shelfIndex = state.bookshelf.findIndex(item => 
          item?.type === 'text' && 
          item.sourceId === textItem.sourceId && 
          item.index === textItem.index
        );
        if (shelfIndex !== -1) {
          state.bookshelf[shelfIndex] = null;
        }

        if (state.scale?.type === 'text' && 
            state.scale.sourceId === textItem.sourceId && 
            state.scale.index === textItem.index) {
          state.scale = null;
        }
      };

      if (fromInventory) {
        return;
      }

      if (state.equippedItem === null) {
        state.equippedItem = textItem;
        if (fromStorage) {
          removeFromStorage();
        }
      }
    },

    storeTextSlices: (state, action) => {
      const { sourceId, slices } = action.payload;
      if (!state.textSlices[sourceId]) {
        state.textSlices[sourceId] = [];
      }
      state.textSlices[sourceId] = slices;
    },

    clearTextSlices: (state, action) => {
      const { sourceId } = action.payload;
      if (sourceId in state.textSlices) {
        delete state.textSlices[sourceId];
      }
    },

    // Add new reducers for character map management
    storeCharacterMap: (state, action) => {
      const { sourceId, characters } = action.payload;
      state.characterMaps[sourceId] = characters;
    },

    removeCharacterMap: (state, action) => {
      const { sourceId } = action.payload;
      delete state.characterMaps[sourceId];
    },

    updateCharacterMap: (state, action) => {
      const { sourceId, removedIndices } = action.payload;
      if (state.characterMaps[sourceId]) {
        // Mark characters as hidden instead of removing them
        state.characterMaps[sourceId].forEach(char => {
          if (removedIndices.includes(char.originalIndex)) {
            char.hidden = true;
          }
        });
      }
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
  clearCardBox,
  equipCard,
  dropCard,
  swapEquippedItem,
  pickupText,
  returnText,
  addMoneyToWallet,
  removeMoneyFromWallet,
  setCoinInSlot,
  markCoinCollected,
  rightClickCoin,
  leftClickCoin,
  addToWallet,
  removeFromWallet,
  collectCoinBill,
  uncollectCoinBill,
  exchangeMoney,
  dropItem,
  rightClickCard,
  leftClickCard,
  addToCardBox,
  removeFromCardBox,
  rightClickFlower,
  leftClickFlower,
  rightClickLevelButton,
  leftClickLevelButton,
  rightClickText,
  leftClickText,
  storeTextSlices,
  clearTextSlices,
  storeCharacterMap,
  removeCharacterMap,
  updateCharacterMap
} = inventorySlice.actions;

export default inventorySlice.reducer; 