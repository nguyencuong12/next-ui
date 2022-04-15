import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface initialState {
  open: boolean;
}
const initialState: initialState = {
  open: false,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    change: (state) => {
      state.open = !state.open;
    },
  },
});

export const { change } = menuSlice.actions;

export default menuSlice.reducer;
