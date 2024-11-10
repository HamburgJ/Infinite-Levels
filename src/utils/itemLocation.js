export const getItemLocation = (state, itemId) => {

  // Check equipped item
  if (state.inventory.equippedItem?.id === itemId) {
    return 'equipped';
  }

  // Check if card is in the box (whether equipped or not)
  if (state.inventory.cardBoxContents[itemId]) {
    return 'card-box';
  }

  // Check scale
  if (state.inventory.scale?.id === itemId) {
    return 'scale';
  }

  // Check bookshelf and containers within it
  const bookshelfIndex = state.inventory.bookshelf.findIndex(item => {
    // Direct match
    if (item?.id === itemId) return true;

    // Check card box contents
    if (item?.type === 'card-box' && item.collectedCards?.[itemId]) {
      return true;
    }

    return false;
  });

  if (bookshelfIndex !== -1) {
    return `bookshelf-${bookshelfIndex}`;
  }

  // Check if card is in equipped card box
  if (state.inventory.equippedItem?.type === 'card-box' && 
      state.inventory.equippedItem.collectedCards?.[itemId]) {
    return 'equipped-box';
  }

  return null;
};

export const isItemAvailable = (state, itemId) => {
  const location = getItemLocation(state, itemId);
  return location === null;
}; 