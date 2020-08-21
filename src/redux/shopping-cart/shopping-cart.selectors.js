import { createSelector } from "reselect";

export const selectShoppingCart = (state) => {
  return state.shoppingCart;
};

export const selectShoppingCartDetails = createSelector(
  [selectShoppingCart],
  (shoppingCart) => {
    return shoppingCart.shoppingCartDetails;
  }
);
