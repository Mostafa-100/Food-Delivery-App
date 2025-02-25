import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import cartReducer from "./cart";
import dishReducer from "./dish";

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    dish: dishReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
