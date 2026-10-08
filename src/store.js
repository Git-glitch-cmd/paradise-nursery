import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";

// Redux store banao
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
