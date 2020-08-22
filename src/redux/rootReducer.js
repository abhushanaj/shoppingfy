import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import shoppingItemsReducer from "./shopping-items/shopping-items.reducer";
import shoppingCartReducer from "./shopping-cart/shopping-cart.reducer";
import cartHistoryReducer from "./shopping-history/shopping-history.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["shoppingCart", "cartHistory"],
};

export const rootReducer = combineReducers({
  shoppingList: shoppingItemsReducer,
  shoppingCart: shoppingCartReducer,
  cartHistory: cartHistoryReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
