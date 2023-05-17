import { configureStore } from "@reduxjs/toolkit";
import carReducer from "../reducers/carReducer";

export const store = configureStore({
  reducer: {
    cars: carReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // warn: fixing bug in payload datetime
    }),
});
