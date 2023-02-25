import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { uploadPostState } from '../types/post';

export const initialState: uploadPostState = {
  imageFile: '',
  postText: '',
};

const uploadPostSlice = createSlice({
  name: 'uploadPost',
  initialState,
  reducers: {
    setImageFile: (state, action: PayloadAction<string>) => {
      state.imageFile = action.payload;
    },
    setPostText: (state, action: PayloadAction<string>) => {
      state.postText = action.payload;
    },
  },
});

export const { setImageFile, setPostText } = uploadPostSlice.actions;
export default uploadPostSlice;
