import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  //   post: [],
  //   loadPostLoading: false,
  //   loadPostDone: false,
  //   loadPostError: false,
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      //   .addCase(loadPost.pending, (state) => {
      //     state.loadPostLoading = true;
      //     state.loadPostDone = false;
      //     state.loadPostError = null;
      //   })
      .addDefaultCase((state) => state),
});

export default postSlice;
