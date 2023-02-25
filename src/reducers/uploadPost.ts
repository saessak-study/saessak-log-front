import { uploadPostState } from '../types/uploadpost';
import { uploadPost } from '../actions/uploadPost';
import { createSlice } from '@reduxjs/toolkit';

export const initialState: uploadPostState = {
  uploadPost: [],
  uploadPostLoading: false,
  uploadPostDone: false,
  uploadPostError: null,
};

const uploadPostSlice = createSlice({
  name: 'uploadPost',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(uploadPost.pending, (state) => {
        state.uploadPostLoading = true;
        state.uploadPostDone = false;
        state.uploadPostError = null;
      })
      .addCase(uploadPost.fulfilled, (state, action) => {
        state.uploadPost = action.payload;
        state.uploadPostLoading = false;
        state.uploadPostDone = true;
        state.uploadPostError = null;
      })
      .addCase(uploadPost.rejected, (state, action) => {
        state.uploadPostLoading = false;
        state.uploadPostError = action.error.message;
      }),
});

export default uploadPostSlice;
