import { createSlice } from "@reduxjs/toolkit";

export const PostsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: null,
    error: "",
  },
  reducers: {
    GetAllPosts: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.posts = action.payload;
    },
    errorAtGetAllPosts: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { errorAtGetAllGetAllPosts, GetAllPosts } = PostsSlice.actions;

export default PostsSlice.reducer;
