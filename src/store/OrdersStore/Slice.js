import { createSlice } from "@reduxjs/toolkit";

export const OrdersSlice = createSlice({
  name: "orders",
  initialState: {
    orders: null,
    error: "",
  },
  reducers: {
    GetAllOrders: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.orders = action.payload;
    },
    errorAtGetAllOrders: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { GetAllOrders, errorAtGetAllOrders } = OrdersSlice.actions;

export default OrdersSlice.reducer;
