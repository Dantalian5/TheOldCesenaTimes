import { createSlice } from "@reduxjs/toolkit";

export const navbarSlice = createSlice({
  name: "navbar",
  initialState: {
    show: false,
  },
  reducers: {
    showNav: (state) => {
      state.show = true;
    },
    hideNav: (state) => {
      state.show = false;
    },
    toogleNav: (state) => {
      state.show = !state.show;
    },
  },
});

export const { showNav, hideNav, toogleNav } = navbarSlice.actions;
export default navbarSlice.reducer;
