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
