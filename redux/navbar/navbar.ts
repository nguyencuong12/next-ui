import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface initialState {
  includeBanner: boolean;
}
const initialState: initialState = {
  includeBanner: false,
};

export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    // change: (state) => {
    //   state.includeBanner = !state.open;
    // },
    setIncludeBanner: (state, action: PayloadAction<boolean>) => {
      state.includeBanner = action.payload;
    },
  },
});

export const { setIncludeBanner } = navbarSlice.actions;

export default navbarSlice.reducer;
