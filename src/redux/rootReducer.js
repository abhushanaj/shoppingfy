import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import shoppingItemsReducer from "./shopping-items/shopping-items.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["shoppingList"],
};

export const rootReducer = combineReducers({
  shoppingList: shoppingItemsReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
