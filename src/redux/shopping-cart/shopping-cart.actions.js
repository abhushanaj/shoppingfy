import shoppingCartActionTypes from "./shopping-cart.types";

export const addItemToCart = (item) => {
  return {
    type: shoppingCartActionTypes.ADD_ITEM_TO_CART,
    info:
      "Action to add a item top cart, and also increase quantity by one, if already exists on cart",
    payload: item,
  };
};

export const setShoppingCartName = (name) => {
  return {
    type: shoppingCartActionTypes.SET_CART_NAME,
    info: "This action is used to set the name of the present shopping cart",
    payload: name,
  };
};

export const removeItemFromCart = (item) => {
  return {
    type: shoppingCartActionTypes.REMOVE_CART_ITEM,
    info: "This action is used to remove the item from cart completely",
    payload: item,
  };
};

export const reduceCartItem = (itemToReduce) => {
  return {
    type: shoppingCartActionTypes.REDUCE_CART_ITEM,
    info: "This action is used to reduce the item from cart.",
    payload: itemToReduce,
  };
};

export const clearCart = () => {
  return {
    type: shoppingCartActionTypes.CLEAR_CART,
    info: "This action is used to clear the cart.",
  };
};
