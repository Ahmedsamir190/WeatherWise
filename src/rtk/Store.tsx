import loadingSlice from "./slice/loadingSlice";
import navbarToggle from "./slice/navbarToggle";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer: {
    NavbarToggle: navbarToggle,
    LoadingSlice: loadingSlice,
  },
});
