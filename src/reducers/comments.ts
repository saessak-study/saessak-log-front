import { createSlice } from '@reduxjs/toolkit';
// import { loadComment} from '../actions/comment';

export const initialState = {
  // commentList: [],
  // loadCommentLoading: false,
  // loadCommentDone: false,
  // loadCommentError: false,
};

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {},
  extraReducers: (builder) => builder,
  // .addCase(loadComment.pending, (state) => {
  //   state.loadCommentLoading = true;
  //   state.loadCommentDone = false;
  //   state.loadCommentError = null;
  // })
  // .addCase(loadComment.fulfilled, (state, action) => {
  //   state.loadCommentLoading = false;
  //   state.loadCommentDone = true;
  //   state.commentList = action.payload.results;
  // })
  // .addCase(loadComment.rejected, (state, action) => {
  //   state.loadCommentLoading = false;
  //   state.loadCommentError = action.error;
  // })
  // .addDefaultCase((state) => state),
});

export default commentSlice;
