const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  items: [],
  selectedItems: [],
};

export const sidebarMenuModalSlice = createSlice({
  name: "sidebarMenuModal",
  initialState,
  reducers: {},
});
