import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import sidebarItemsReducers from "./features/sidebar/itemsSlice";
import modalReducers from "./features/Modals/modalSlicer";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    items: sidebarItemsReducers,
    modal: modalReducers,
  },
});
