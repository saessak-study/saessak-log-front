import { combineReducers } from 'redux';

import postSlice from './post';
import uploadPostSlice from './uploadPost';
import searchSlice from './search';
import commentSlice from './comments';
import cardListSlice from './cardList';
import pagingSlice from './paging';
import likePrioritySlice from './likeCommentPriority';

// (이전상태, 액션) => 다음상태
const rootReducer = combineReducers({
  post: postSlice.reducer,
  uploadPost: uploadPostSlice.reducer,
  search: searchSlice.reducer,
  loadComment: commentSlice.reducer,
  loadCardList: cardListSlice.reducer,
  paging: pagingSlice.reducer,
  isLikeOrder: likePrioritySlice.reducer,
});

export default rootReducer;
