/* Utility to remove an item completely from cart*/

export const addItemToCart = (cart, itemToAdd) => {
  // Ffnf if the item already exists in cart
  const isItemPresent = cart.find(
    (currentItem) => currentItem.id === itemToAdd.id
  );

  // if already exists, increase quanity by one for matched item with id
  if (isItemPresent) {
    return cart.map((currentItem) => {
      if (currentItem.id === itemToAdd.id) {
        return {
          ...currentItem,
          quantity: currentItem.quantity + 1,
        };
      } else {
        return currentItem;
      }
    });
  }
  // else return the same items with quantity set to 1
  else {
    return [...cart, { ...itemToAdd, quantity: 1 }];
  }
};

/*---------------------------------------------------------------/*
/*---------------------------------------------------------------/*

/* Utility to remove an item completely from cart*/

export const removeCartItem = (cart, itemToDelete) => {
  return cart.filter((currentItem) => {
    return currentItem.id !== itemToDelete.id;
  });
};
