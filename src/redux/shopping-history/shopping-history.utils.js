/* Utility to add a cart to the cart history*/

export const addCartToHistory = (cartHistory, cartToAdd) => {
  return [...cartHistory, cartToAdd];
};
