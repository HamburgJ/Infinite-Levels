export const getItemLocation = (state, itemId) => {
  // Check equipped item
  if (state.inventory.equippedItem?.id === itemId) {
    return 'equipped';
  }

  // Check scale
  if (state.inventory.scale?.id === itemId) {
    return 'scale';
  }

  // Check bookshelf and card boxes within it
  const bookshelfIndex = state.inventory.bookshelf.findIndex(item => {
    if (item?.id === itemId) return true;
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
  console.log(itemId, getItemLocation(state, itemId));
  return getItemLocation(state, itemId) === null;
}; 