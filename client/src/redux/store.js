import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart.slice";
export const store = configureStore({
  reducer: {
    cartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
