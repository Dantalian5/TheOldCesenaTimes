import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filterSlice";
import navbarReducer from "./navbarSlice";

const store = configureStore({
  reducer: {
    filter: filterReducer,
    navbar: navbarReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
