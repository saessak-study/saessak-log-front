import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { up, down } from './app/counterSlice';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: { counter: { value: number } }): number => {
    // state의 최상위 객체로 counterSlice.reducer의 이름이 들어감, 이 경우 counter
    return state.counter.value;
  });
  return (
    <div>
      <button
        type='button'
        onClick={() => {
          // slice의 액션 중 하나인 up을 사용함, 변수는 payload
          dispatch(up(2));
        }}
      >
        +
      </button>
      <button
        type='button'
        onClick={() => {
          // slice의 액션 중 하나인 up을 사용함, 변수는 payload
          dispatch(down(2));
        }}
      >
        -
      </button>
      {count}
    </div>
  );
};

export default Counter;