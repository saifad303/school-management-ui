import { createSlice } from "@reduxjs/toolkit";
import { sidebarItemList } from "./itemsData";

const initialState = {
  itemList: sidebarItemList,
};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
});

export const sidebarItems = (state) => state.items.itemList;

export default itemsSlice.reducer;
