import inventoryReducer, {
  equipItem,
  unequipItem,
  addToScale,
  removeFromScale,
  addToBookshelf,
  removeFromBookshelf,
  addToWallet,
  removeFromWallet,
  exchangeMoney,
  dropItem,
} from './inventorySlice';

const makeInitialState = (overrides = {}) => ({
  equippedItem: null,
  scale: null,
  bookshelf: Array(9).fill(null),
  walletDenominations: {
    1: 0, 5: 0, 10: 0, 25: 0, 500: 0, 1000: 0, 2000: 0, 5000: 0, 10000: 0,
  },
  collectedCoinBills: {},
  cardBoxContents: {},
  collectedCards: {},
  textSlices: {},
  characterMaps: {},
  ...overrides,
});

describe('inventorySlice reducer', () => {
  // ─── equip / unequip ──────────────────────────────────────────────────────
  describe('equipItem', () => {
    test('equips an item', () => {
      const state = inventoryReducer(
        makeInitialState(),
        equipItem({ id: 'sword', type: 'weapon' })
      );
      expect(state.equippedItem).toEqual({ id: 'sword', type: 'weapon' });
    });

    test('equips item from bookshelf storage', () => {
      const bookshelf = Array(9).fill(null);
      bookshelf[2] = { id: 'book-1', type: 'book' };
      const state = inventoryReducer(
        makeInitialState({ bookshelf }),
        equipItem({ id: 'book-1', type: 'book', fromStorage: true })
      );
      expect(state.equippedItem.id).toBe('book-1');
      expect(state.bookshelf[2]).toBeNull();
    });
  });

  describe('unequipItem', () => {
    test('clears equipped item', () => {
      const state = inventoryReducer(
        makeInitialState({ equippedItem: { id: 'item', type: 'misc' } }),
        unequipItem()
      );
      expect(state.equippedItem).toBeNull();
    });
  });

  // ─── scale ────────────────────────────────────────────────────────────────
  describe('scale', () => {
    test('adds item to scale', () => {
      const state = inventoryReducer(
        makeInitialState(),
        addToScale({ item: { id: 'weight', type: 'misc' } })
      );
      expect(state.scale).toBeDefined();
      expect(state.scale.id).toBe('weight');
    });

    test('removes item from scale', () => {
      const state = inventoryReducer(
        makeInitialState({ scale: { id: 'weight', type: 'misc' } }),
        removeFromScale()
      );
      expect(state.scale).toBeNull();
    });
  });

  // ─── bookshelf ────────────────────────────────────────────────────────────
  describe('bookshelf', () => {
    test('adds item to bookshelf at specific index', () => {
      const state = inventoryReducer(
        makeInitialState(),
        addToBookshelf({ item: { id: 'book', type: 'book' }, index: 4 })
      );
      expect(state.bookshelf[4]).toBeDefined();
      expect(state.bookshelf[4].id).toBe('book');
    });

    test('removes item from bookshelf at index', () => {
      const bookshelf = Array(9).fill(null);
      bookshelf[3] = { id: 'book', type: 'book' };
      const state = inventoryReducer(
        makeInitialState({ bookshelf }),
        removeFromBookshelf({ index: 3 })
      );
      expect(state.bookshelf[3]).toBeNull();
    });

    test('does not affect other bookshelf slots', () => {
      const bookshelf = Array(9).fill(null);
      bookshelf[1] = { id: 'a', type: 'book' };
      bookshelf[5] = { id: 'b', type: 'book' };
      const state = inventoryReducer(
        makeInitialState({ bookshelf }),
        removeFromBookshelf({ index: 1 })
      );
      expect(state.bookshelf[1]).toBeNull();
      expect(state.bookshelf[5]).toEqual({ id: 'b', type: 'book' });
    });
  });

  // ─── wallet denominations ─────────────────────────────────────────────────
  describe('wallet denominations', () => {
    test('adds to wallet', () => {
      const state = inventoryReducer(
        makeInitialState(),
        addToWallet({ value: 25 })
      );
      expect(state.walletDenominations[25]).toBe(1);
    });

    test('adds multiple of same denomination', () => {
      let state = makeInitialState();
      state = inventoryReducer(state, addToWallet({ value: 100 }));
      // 100 is not a valid denomination key but test the increment
      state = inventoryReducer(state, addToWallet({ value: 25 }));
      state = inventoryReducer(state, addToWallet({ value: 25 }));
      expect(state.walletDenominations[25]).toBe(2);
    });

    test('removes from wallet (clamped at 0)', () => {
      let state = inventoryReducer(makeInitialState(), addToWallet({ value: 10 }));
      state = inventoryReducer(state, removeFromWallet({ value: 10 }));
      expect(state.walletDenominations[10]).toBe(0);
      // Removing again should not go negative
      state = inventoryReducer(state, removeFromWallet({ value: 10 }));
      expect(state.walletDenominations[10]).toBe(0);
    });
  });

  // ─── exchangeMoney ────────────────────────────────────────────────────────
  describe('exchangeMoney', () => {
    test('exchanges denominations', () => {
      let state = makeInitialState();
      state = inventoryReducer(state, addToWallet({ value: 1000 }));
      state = inventoryReducer(
        state,
        exchangeMoney({ give: { 1000: 1 }, get: { 500: 2 } })
      );
      expect(state.walletDenominations[1000]).toBe(0);
      expect(state.walletDenominations[500]).toBe(2);
    });
  });

  // ─── dropItem ─────────────────────────────────────────────────────────────
  describe('dropItem', () => {
    test('drops equipped item', () => {
      const state = inventoryReducer(
        makeInitialState({ equippedItem: { id: 'junk', type: 'misc' } }),
        dropItem({ returnCoins: false, returnCards: false })
      );
      expect(state.equippedItem).toBeNull();
    });

    test('does nothing when nothing is equipped', () => {
      const state = inventoryReducer(
        makeInitialState(),
        dropItem({ returnCoins: false, returnCards: false })
      );
      expect(state.equippedItem).toBeNull();
    });
  });
});
