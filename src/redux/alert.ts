import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    alertToggle: (state) => {
      state.value = !state.value;
    },
 
  },
});

export const { alertToggle } = alertSlice.actions;

export default alertSlice.reducer;