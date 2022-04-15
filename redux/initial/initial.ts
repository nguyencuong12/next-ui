import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface initialState {
  loading: boolean;
}
const initialState: initialState = {
  loading: true,
};

export const initialSlice = createSlice({
  name: "initial",
  initialState,
  reducers: {
    changeLoading: (state) => {
      state.loading = !state.loading;
    },
  },
});

export const { changeLoading } = initialSlice.actions;

export default initialSlice.reducer;
