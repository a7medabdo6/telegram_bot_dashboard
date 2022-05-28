import { createSlice } from "@reduxjs/toolkit";

export const UsersSlice = createSlice({
  name: "users",
  initialState: {
    users: null,
    error: "",
  },
  reducers: {
    GetAllUsers: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.users = action.payload;
    },
    errorAtGetAllUsers: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { errorAtGetAllUsers, GetAllUsers } = UsersSlice.actions;

export default UsersSlice.reducer;
