import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  //   Image: [],
  //   uploadImageLoading: false,
  //   uploadImageDone: false,
  //   uploadImageError: false,
};

const imageSlice = createSlice({
  name: 'Image',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      //   .addCase(uploadImage.pending, (state) => {
      //     state.uploadImageLoading = true;
      //     state.uploadImageDone = false;
      //     state.uploadImageError = null;
      //   })
      .addDefaultCase((state) => state),
});

export default imageSlice;
