import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
  },
  reducers: {
    getPost: (state, action) => {
      state.posts = action.payload;
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((data) => data.id !== action.payload);
    },
  },
});

export const { getPost, deletePost } = postSlice.actions;
export default postSlice.reducer;
