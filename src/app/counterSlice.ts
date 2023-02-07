//작은 슬라이스, 모여서 configureStore를 만듦
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counterSlice',
  initialState: { value: 0 },
  reducers: {
    up: (state, action) => {
      state.value = state.value + action.payload;
    },
  },
});

export default counterSlice;
export const { up } = counterSlice.actions;
