import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../layouts/authentication/AuthStore/Slice";

export const store = configureStore({
  reducer: {
    Auth: AuthSlice,
  },
});
