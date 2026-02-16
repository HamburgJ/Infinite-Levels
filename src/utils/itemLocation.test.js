import { getItemLocation, isItemAvailable } from './itemLocation';

const makeState = (overrides = {}) => ({
  inventory: {
    equippedItem: null,
    cardBoxContents: {},
    scale: null,
    bookshelf: Array(9).fill(null),
    ...overrides,
  },
});

describe('getItemLocation', () => {
  test('returns "equipped" when item is equipped', () => {
    const state = makeState({ equippedItem: { id: 'sword-1' } });
    expect(getItemLocation(state, 'sword-1')).toBe('equipped');
  });

  test('returns "card-box" when item is in card box', () => {
    const state = makeState({ cardBoxContents: { 'card-ace': 1 } });
    expect(getItemLocation(state, 'card-ace')).toBe('card-box');
  });

  test('returns "scale" when item is on scale', () => {
    const state = makeState({ scale: { id: 'weight-1' } });
    expect(getItemLocation(state, 'weight-1')).toBe('scale');
  });

  test('returns bookshelf index when item is on bookshelf', () => {
    const bookshelf = Array(9).fill(null);
    bookshelf[3] = { id: 'book-1' };
    const state = makeState({ bookshelf });
    expect(getItemLocation(state, 'book-1')).toBe('bookshelf-3');
  });

  test('returns bookshelf index when item is in a card-box on bookshelf', () => {
    const bookshelf = Array(9).fill(null);
    bookshelf[2] = { id: 'box-1', type: 'card-box', collectedCards: { 'card-x': true } };
    const state = makeState({ bookshelf });
    expect(getItemLocation(state, 'card-x')).toBe('bookshelf-2');
  });

  test('returns "equipped-box" for card in equipped card-box', () => {
    const state = makeState({
      equippedItem: { id: 'box-1', type: 'card-box', collectedCards: { 'card-y': true } },
    });
    expect(getItemLocation(state, 'card-y')).toBe('equipped-box');
  });

  test('returns null when item is not found anywhere', () => {
    const state = makeState();
    expect(getItemLocation(state, 'nonexistent')).toBeNull();
  });
});

describe('isItemAvailable', () => {
  test('returns true when item is not found (available to pick up)', () => {
    const state = makeState();
    expect(isItemAvailable(state, 'free-item')).toBe(true);
  });

  test('returns false when item is already located', () => {
    const state = makeState({ equippedItem: { id: 'held-item' } });
    expect(isItemAvailable(state, 'held-item')).toBe(false);
  });
});
