import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store/configureStore';

export const initialState = {
  value: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    typing: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export default searchSlice;
