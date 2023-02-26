import { createSlice } from '@reduxjs/toolkit';
import { loadComment } from '../actions/comment';
import { loadCommentState } from '../types/comment';

export const initialState: loadCommentState = {
  loadCommentList: [],
  loadCommentLoading: false,
  loadCommentDone: false,
  loadCommentError: null,
};

const commentSlice = createSlice({
  name: 'loadComment',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(loadComment.pending, (state) => {
        state.loadCommentLoading = true;
        state.loadCommentDone = false;
        state.loadCommentError = null;
      })
      .addCase(loadComment.fulfilled, (state, action) => {
        state.loadCommentList = state.loadCommentList.concat(action.payload);
        state.loadCommentLoading = false;
        state.loadCommentDone = true;
        state.loadCommentError = null;
      })
      .addCase(loadComment.rejected, (state, action) => {
        state.loadCommentLoading = false;
        state.loadCommentError = action.error.message;
      })
      .addDefaultCase((state) => state),
});

export default commentSlice;
