import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import sidebarItemsReducers from "./features/sidebar/itemsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    items: sidebarItemsReducers,
  },
});
