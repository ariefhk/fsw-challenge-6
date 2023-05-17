import { configureStore } from "@reduxjs/toolkit";
import carReducer from "../reducers/carReducer";

export const store = configureStore({
  reducer: {
    cars: carReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // warn: in order to use the global ConfirmDialog, disable the serializableCheck check
    }),
});
