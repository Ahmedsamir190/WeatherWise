import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
  showloader: "true",
};

export const LoadingSlice = createSlice({
  name: "loadingSlice",
  initialState: initialstate,
  reducers: {
    loading: (state) => {
      state.showloader = !state.showloader;
    },
  },
});

export const { loading } = LoadingSlice.actions;
export default LoadingSlice.reducer;
