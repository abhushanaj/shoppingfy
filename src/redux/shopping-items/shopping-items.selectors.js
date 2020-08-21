import { createSelector } from "reselect";

export const selectShoppingList = (state) => {
  return state.shoppingList;
};

export const selectShoppingListDetails = createSelector(
  [selectShoppingList],
  (shoppingList) => {
    return shoppingList.shoppingListDetails;
  }
);
