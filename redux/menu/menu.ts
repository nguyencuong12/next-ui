import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface initialState {
  open: boolean;
}
const initialState: initialState = {
  open: false,
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    change: state => {
      state.open = !state.open;
    },
    setCloseMenu: state => {
      state.open = false;
    },
  },
});

export const { change, setCloseMenu } = menuSlice.actions;

export default menuSlice.reducer;
