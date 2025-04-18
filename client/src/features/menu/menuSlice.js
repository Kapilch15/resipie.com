import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};
const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenu: (state, action) => {
      state.items = action.payload;
    },
    addMenu: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { setMenu, addMenu } = menuSlice.actions;
export default menuSlice.reducer;
 