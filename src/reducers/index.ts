import { combineReducers } from 'redux';

import postSlice from './post';
import uploadPostSlice from './uploadPost';
import searchSlice from './search';
import commentSlice from './comments';
import cardListSlice from './cardList';

// (이전상태, 액션) => 다음상태
const rootReducer = combineReducers({
  post: postSlice.reducer,
  uploadPost: uploadPostSlice.reducer,
  search: searchSlice.reducer,
  loadComment: commentSlice.reducer,
  loadCardList: cardListSlice.reducer,
});

export default rootReducer;
