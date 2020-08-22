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

/*---------------------------------------------------------------*/
/*---------------------------------------------------------------*/

/* Utility to remove an item completely from cart*/

export const removeCartItem = (cart, itemToDelete) => {
  return cart.filter((currentItem) => {
    return currentItem.id !== itemToDelete.id;
  });
};

/*---------------------------------------------------------------*/
/*---------------------------------------------------------------*/

/* Utility to reduce the cart item count or remove it if it has one as quantity */

export const reduceCartItem = (cart, itemToReduce) => {
  // if itemCount is 1 remove it
  if (itemToReduce.quantity === 1) {
    return removeCartItem(cart, itemToReduce);
  }
  // find the item and reduce by 1
  else {
    return cart.map((currentItem) => {
      if (currentItem.id === itemToReduce.id) {
        return {
          ...currentItem,
          quantity: currentItem.quantity - 1,
        };
      } else {
        return currentItem;
      }
    });
  }
};
