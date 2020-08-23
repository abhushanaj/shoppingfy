import shoppingHistoryTypes from "./shopping-history.types";

import {
  addCartToHistory,
  setGroceryListStatus,
} from "./shopping-history.utils";

const INITIAL_STATE = {
  cartHistoryDetails: [],
};
const cartHistoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shoppingHistoryTypes.SAVE_CART_TO_HISTORY: {
      return {
        ...state,
        cartHistoryDetails: addCartToHistory(
          state.cartHistoryDetails,
          action.payload
        ),
      };
    }
    case shoppingHistoryTypes.SET_GROCERY_STATUS: {
      return {
        ...state,
        cartHistoryDetails: setGroceryListStatus(
          state.cartHistoryDetails,
          action.payload.groceryID,
          action.payload.status
        ),
      };
    }
    default: {
      return state;
    }
  }
};

export default cartHistoryReducer;
