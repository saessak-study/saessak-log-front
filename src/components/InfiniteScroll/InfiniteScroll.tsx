import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
// import commentSlice from '../../reducers/comments';
import { loadComment } from '../../actions/comment';

// 스크롤하는 모든 부분이 무한스크롤로 이루어져야 함.
interface Props {
  children: React.ReactNode;
}

const PAGE_SIZE = 10;
const InfiniteScroll = ({ children }: Props) => {
  return (
    <div>
      <div className='infiniteScroll_space'>{children}</div>
    </div>
  );
};

export default InfiniteScroll;
