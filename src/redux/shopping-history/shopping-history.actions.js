import shoppingHistoryTypes from "./shopping-history.types";

export const saveCartToHistory = (cart) => {
  return {
    type: shoppingHistoryTypes.SAVE_CART_TO_HISTORY,
    info: "This action is used to save an entire cart to history",
    payload: cart,
  };
};
