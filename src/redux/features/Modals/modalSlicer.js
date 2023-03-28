const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  isModal: false,
};

export const modalSlicer = createSlice({
  name: "modal",
  initialState,
  reducers: {
    isModalHandler: (state, action) => {
      state.isModal = action.payload;
    },
  },
});

export const { isModalHandler } = modalSlicer.actions;

export const isModal = (state) => state.modal.isModal;

export default modalSlicer.reducer;
