import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addComment, addPost, fetchPosts } from "./postsOperations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = [...state.items, action.payload];
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const currentPost = state.items.find(item => item.id === action.payload.postId);
        currentPost.comments = [...currentPost.comments, action.payload];
        
      })
      .addMatcher(isAnyOf(fetchPosts.pending, addPost.pending, addComment.pending), (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(fetchPosts.rejected, addPost.rejected, addComment.rejected),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const postsReducer = postsSlice.reducer;
