import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../layouts/authentication/AuthStore/Slice";
import UsersSlice from "./UsersStore/Slice";
import PostsSlice from "./PostsStore/Slice";
import OrdersSlice from "./OrdersStore/Slice";

export const store = configureStore({
  reducer: {
    Auth: AuthSlice,
    Users: UsersSlice,
    Posts: PostsSlice,
    Orders: OrdersSlice,
  },
});
