import shoppingItemTypes from "./shopping-items.types";

export const fetchShoppingOptions = () => {
  return {
    type: shoppingItemTypes.FETCH_SHOPPING_OPTIONS,
    info:
      "This action is used to fetch the possible options for users to shop from.",
  };
};
