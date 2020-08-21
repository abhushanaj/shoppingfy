import shoppingCartActionTypes from "./shopping-cart.types";

import { addItemToCart } from "./shopping-cart.utils";

const INITIAL_STATE = {
  shoppingCartDetails: [],
  shoppingCartName: "Shopping List",
};

const shoppingCartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shoppingCartActionTypes.ADD_ITEM_TO_CART: {
      return {
        ...state,
        shoppingCartDetails: addItemToCart(
          state.shoppingCartDetails,
          action.payload
        ),
      };
    }
    case shoppingCartActionTypes.SET_CART_NAME: {
      return {
        ...state,
        shoppingCartName: action.payload,
      };
    }
    default:
      return state;
  }
};

export default shoppingCartReducer;