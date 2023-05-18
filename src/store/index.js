import { configureStore } from "@reduxjs/toolkit";
import carReducer from "../reducers/carReducer";
import themeReducer from "../reducers/themeReducer";

export const store = configureStore({
  reducer: {
    cars: carReducer,
    themes: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // warn: fixing seriable check in payload datetime
    }),
});
