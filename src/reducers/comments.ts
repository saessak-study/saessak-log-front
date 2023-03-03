import { createSlice } from '@reduxjs/toolkit';
import { loadComment, writeComment } from '../actions/comment';
import { IcommentState } from '../types/comment';

export const initialState: IcommentState = {
  loadCommentList: [],
  loadCommentLoading: false,
  loadCommentDone: false,
  loadCommentError: null,
  hasMore: true,
  pageNum: 0,
  createComment: null,
  createCommentLoading: false,
  createCommentDone: false,
  createCommentError: null,
};

const commentSlice = createSlice({
  name: 'comment',
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
        state.loadCommentLoading = false;
        state.loadCommentDone = true;
        state.loadCommentError = null;
        state.loadCommentList = state.loadCommentList.concat(action.payload);
        state.hasMore = action.payload.length === 5;
        if (state.hasMore) {
          state.pageNum += 1;
        }
      })
      .addCase(loadComment.rejected, (state, action) => {
        state.loadCommentLoading = false;
        state.loadCommentError = action.error.message;
      })
      .addCase(writeComment.pending, (state) => {
        state.createCommentLoading = true;
        state.createCommentDone = false;
        state.createCommentError = null;
      })
      .addCase(writeComment.fulfilled, (state, action) => {
        state.createComment = action.payload;
        state.createCommentLoading = false;
        state.createCommentDone = true;
        state.createCommentError = null;
      })
      .addCase(writeComment.rejected, (state, action) => {
        state.createCommentLoading = false;
        state.createCommentError = action.error.message;
      })
      .addDefaultCase((state) => state),
});

export default commentSlice;
