// 작은 슬라이스, 모여서 configureStore를 만듦
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counterSlice',
  initialState: { value: 0 },
  reducers: {
    up: (state, action) => {
      state.value += action.payload;
    },
    down: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export default counterSlice;
export const { up, down } = counterSlice.actions;
