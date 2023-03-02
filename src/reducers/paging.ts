import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store/configureStore';

export const initialState = {
  value: 0,
};

const pagingSlice = createSlice({
  name: 'paging',
  initialState,
  reducers: {
    paging: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export default pagingSlice;
