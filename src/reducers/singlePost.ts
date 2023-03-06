import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const initialState = {
  value: 0,
};

const singlePostSlice = createSlice({
  name: 'singlePostLike',
  initialState,
  reducers: {
    singlePostLike: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export default singlePostSlice;
