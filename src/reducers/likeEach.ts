import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const initialState = {
  isLike: false,
};

const likeEachSlice = createSlice({
  name: 'likeEach',
  initialState,
  reducers: {
    likeEach: (state, action: PayloadAction<boolean>) => {
      state.isLike = action.payload;
    },
  },
});

export default likeEachSlice;
