import CARDS from './cards';

describe('CARDS data', () => {
  test('is a non-empty object', () => {
    expect(Object.keys(CARDS).length).toBeGreaterThan(0);
  });

  test('every card has required fields', () => {
    Object.values(CARDS).forEach(card => {
      expect(card).toHaveProperty('id');
      expect(card).toHaveProperty('name');
      expect(card).toHaveProperty('suit');
      expect(card).toHaveProperty('value');
      expect(card).toHaveProperty('rarity');
    });
  });

  test('card ids match their keys', () => {
    Object.entries(CARDS).forEach(([key, card]) => {
      expect(card.id).toBe(key);
    });
  });

  test('suits are from the expected set', () => {
    const validSuits = ['spades', 'hearts', 'diamonds', 'clubs', 'void', 'special'];
    Object.values(CARDS).forEach(card => {
      expect(validSuits).toContain(card.suit);
    });
  });

  test('rarities are from the expected set', () => {
    const validRarities = ['normal', 'gold-shiny', 'diamond', 'dark-holographic'];
    Object.values(CARDS).forEach(card => {
      expect(validRarities).toContain(card.rarity);
    });
  });

  test('contains the joker card', () => {
    expect(CARDS['joker']).toBeDefined();
    expect(CARDS['joker'].name).toBe('The Joker');
  });

  test('contains void ace', () => {
    expect(CARDS['ace-void']).toBeDefined();
    expect(CARDS['ace-void'].suit).toBe('void');
  });
});
