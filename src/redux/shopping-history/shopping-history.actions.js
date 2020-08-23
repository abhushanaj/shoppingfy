import shoppingHistoryTypes from "./shopping-history.types";

export const saveCartToHistory = (cart) => {
  return {
    type: shoppingHistoryTypes.SAVE_CART_TO_HISTORY,
    info: "This action is used to save an entire cart to history",
    payload: cart,
  };
};

export const setGroceryListStatus = (groceryID, status = "pending") => {
  return {
    type: shoppingHistoryTypes.SET_GROCERY_STATUS,
    info: "This action is used to set the status to grocery cart history",
    payload: { groceryID, status },
  };
};
