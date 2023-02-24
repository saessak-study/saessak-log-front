import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const initialState = {
  image: null,
  content: '',
  // uploadPostLoading: false,
  // uploadPostDone: false,
  // uploadPostError: null,
};

// 업로드할 이미지와 게시글은 전역에 저장할 필요가 없음
// api테스트 할 때는 extraReducer 사용

const uploadPostSlice = createSlice({
  name: 'uploadPost',
  initialState,
  reducers: {
    setImage: (state, action: PayloadAction<string | null>) => {
      state.image = action.payload;
    },
    setContent: (state, action: PayloadAction<string>) => {
      state.content = action.payload;
    },
  },
  extraReducers: (builder) => builder,
  // .addCase(uploadPost.pending, (state) => {
  //   state.uploadPostLoading = true;
  //   state.uploadPostDone = false;
  //   state.uploadPostError = null;
  // })
  // .addCase(uploadPost.fulfilled, (state, action) => {
  //   state.uploadPostLoading = false;
  //   state.uploadPostDone = true;
  //   state.uploadPostError = null;
  // })
  // .addCase(uploadPost.rejected, (state, action) => {
  //   state.uploadPostLoading = false;
  //   state.uploadPostDone = false;
  //   state.uploadPostError = action.error;
  // })
  // .addDefaultCase((state) => state),
});

export default uploadPostSlice;
