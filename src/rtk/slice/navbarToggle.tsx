import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visiblenav: false,
};

export const NavbarToggle = createSlice({
  name: "toggle",
  initialState: initialState,
  reducers: {
    NavToggle: (state) => {
      state.visiblenav = !state.visiblenav;
    },
  },
});

export const { NavToggle } = NavbarToggle.actions;

export default NavbarToggle.reducer;
