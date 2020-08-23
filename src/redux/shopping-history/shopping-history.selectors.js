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
      const dates = [];
      if (cart.status === "completed") {
        dates.push(new Date(cart.date).toDateString());
      }
      return dates;
    });
  }
);

export const selectTotalShopQuantity = createSelector(
  [selectCartHistoryDetails],
  (cartHistory) => {
    const completedGrocery = cartHistory.filter((cart) => {
      return cart.status === "completed";
    });
    return completedGrocery.map((cart) => {
      return cart.shoppingCartList.reduce((acc, cartItem) => {
        return acc + cartItem.quantity;
      }, 0);
    });
  }
);
