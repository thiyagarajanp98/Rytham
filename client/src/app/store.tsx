import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/homeData";
const store = configureStore({
  reducer: {
    HomeData: userReducer,
  },
});
export default store;
