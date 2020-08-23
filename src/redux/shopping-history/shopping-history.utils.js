/* Utility to add a cart to the cart history*/

export const addCartToHistory = (cartHistory, cartToAdd) => {
  return [...cartHistory, cartToAdd];
};

/* Utility to get total items in cart */

export const getHistoryCartSummary = (cart) => {
  return cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
};
