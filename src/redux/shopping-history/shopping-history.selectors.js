import { createSelector } from "reselect";

export const selectCartHistory = (state) => {
  return state.cartHistory;
};

export const selectCartHistoryDetails = createSelector(
  [selectCartHistory],
  (cartHistory) => {
    return cartHistory.cartHistoryDetails;
  }
);

export const selectCartHistoryDates = createSelector(
  [selectCartHistoryDetails],
  (cartHistory) => {
    return cartHistory.map((cart) => {
      return new Date(cart.date).toDateString();
    });
  }
);

export const selectTotalShopQuantity = createSelector(
  [selectCartHistoryDetails],
  (cartHistory) => {
    return cartHistory.map((cart) => {
      return cart.shoppingCartList.reduce((acc, cartItem) => {
        return acc + cartItem.quantity;
      }, 0);
    });
  }
);
