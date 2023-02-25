import { createSlice } from '@reduxjs/toolkit';
import { loadPost } from '../actions/post';
import { postState } from '../types/post';

export const initialState: postState = {
  post: [],
  loadPostLoading: false,
  loadPostDone: false,
  // loadPostError: null,
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(loadPost.pending, (state) => {
        state.loadPostLoading = true;
        state.loadPostDone = false;
        // state.loadPostError = null;
      })
      .addCase(loadPost.fulfilled, (state, action) => {
        state.loadPostLoading = false;
        state.loadPostDone = true;
        // state.loadPostError = null;
        state.post = action.payload;
      })
      .addCase(loadPost.rejected, (state, action) => {
        state.loadPostLoading = false;
        state.loadPostDone = false;
        // state.loadPostError = action.error;
      })
      .addDefaultCase((state) => state),
});

export default postSlice;
