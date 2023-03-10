import { combineReducers } from 'redux';

import postSlice from './post';
import uploadPostSlice from './uploadPost';
import searchSlice from './search';
import commentSlice from './comments';
import cardListSlice from './cardList';
import pagingSlice from './paging';
import likePrioritySlice from './likeCommentPriority';
import userSlice from './user';
import likeEachSlice from './likeEach';
import singlePostSlice from './singlePost';

// (이전상태, 액션) => 다음상태
const rootReducer = combineReducers({
  post: postSlice.reducer,
  uploadPost: uploadPostSlice.reducer,
  search: searchSlice.reducer,
  comment: commentSlice.reducer,
  loadCardList: cardListSlice.reducer,
  paging: pagingSlice.reducer,
  isLikeOrder: likePrioritySlice.reducer,
  user: userSlice.reducer,
  likeEach: likeEachSlice.reducer,
  singlePost: singlePostSlice.reducer,
});

export default rootReducer;
