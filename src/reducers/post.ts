import { createSlice } from '@reduxjs/toolkit';
import { loadMyPost } from '../actions/post';
import { Ipost } from '../types/post';

export const initialState: Ipost = {
  myPost: [],
  loadMyPostLoading: false,
  loadMyPostDone: false,
  loadMyPostError: null,
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(loadMyPost.pending, (state) => {
        state.loadMyPostLoading = true;
        state.loadMyPostDone = false;
        state.loadMyPostError = null;
      })
      .addCase(loadMyPost.fulfilled, (state, action) => {
        state.loadMyPostLoading = true;
        state.loadMyPostDone = false;
        state.loadMyPostError = null;
        state.myPost = state.myPost.concat(action.payload);
      })
      .addCase(loadMyPost.rejected, (state, action) => {
        state.loadMyPostLoading = true;
        state.loadMyPostDone = false;
        state.loadMyPostError = action.error.message;
      })
      .addDefaultCase((state) => state),
});

export default postSlice;
