import shoppingCartActionTypes from "./shopping-cart.types";

export const addItemToCart = (item) => {
  return {
    type: shoppingCartActionTypes.ADD_ITEM_TO_CART,
    info:
      "Action to add a item top cart, and also increase quantity if already exists on cart",
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
