import { configureStore } from "@reduxjs/toolkit";

import alertReducer from "../redux/alert";

//redux store
export const store = configureStore({
  reducer: {
    alert: alertReducer, // alert modal
  },
});