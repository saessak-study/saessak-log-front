import { createSlice } from '@reduxjs/toolkit';
import { loadMyPost, loadMySubPost } from '../actions/post';
import { subscribe } from '../actions/user';
import { getSinglePost } from '../actions/viewCardEach';
import { Ipost } from '../types/post';

export const initialState: Ipost = {
  myPost: [],
  singlePost: null,
  loadMyPostLoading: false,
  loadMyPostDone: false,
  loadMyPostError: null,
  hasMoreMyPost: true,
  myPostPageNum: 0,
  mySubPost: [],
  loadMySubPostLoading: false,
  loadMySubPostDone: false,
  loadMySubPostError: null,
  hasMoreSubPost: true,
  subPostPageNum: 0,
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
        state.loadMyPostLoading = false;
        state.loadMyPostDone = true;
        state.loadMyPostError = null;
        state.myPost = state.myPost.concat(action.payload);
        state.hasMoreMyPost = action.payload.length === 6;
        if (state.hasMoreMyPost) {
          state.myPostPageNum += 1;
        }
      })
      .addCase(loadMyPost.rejected, (state, action) => {
        state.loadMyPostLoading = false;
        state.loadMyPostDone = false;
        state.loadMyPostError = action.error.message;
      })
      .addCase(loadMySubPost.pending, (state) => {
        state.loadMySubPostLoading = true;
        state.loadMySubPostDone = false;
        state.loadMySubPostError = null;
      })
      .addCase(loadMySubPost.fulfilled, (state, action) => {
        state.loadMySubPostLoading = false;
        state.loadMySubPostDone = true;
        state.loadMySubPostError = null;
        state.mySubPost = state.mySubPost.concat(action.payload);
        state.hasMoreSubPost = action.payload.length === 6;
        if (state.hasMoreSubPost) {
          state.subPostPageNum += 1;
        }
      })
      .addCase(loadMySubPost.rejected, (state, action) => {
        state.loadMySubPostLoading = false;
        state.loadMySubPostDone = false;
        state.loadMySubPostError = action.error.message;
      })
      .addCase(getSinglePost.fulfilled, (state, action) => {
        state.singlePost = action.payload;
      })
      .addCase(subscribe.fulfilled, (state, action) => {
        if (action.payload === '구독하셨습니다.') {
          state.singlePost.subscribe = true;
        } else {
          state.singlePost.subscribe = false;
        }
        state.mySubPost = [];
        state.hasMoreSubPost = true;
        state.subPostPageNum = 0;
      })
      .addDefaultCase((state) => state),
});

export default postSlice;
