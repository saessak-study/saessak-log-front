import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';

//counterslice안에 들어간 여러 reducer를 포함함(up, down, delete 등등의 함수)
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;
