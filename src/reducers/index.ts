import { combineReducers } from 'redux';

import postSlice from './post';
import uploadPostSlice from './uploadPost';
import searchSlice from './search';
import commentSlice from './comments';
import userSlice from './user';

// (이전상태, 액션) => 다음상태
const rootReducer = combineReducers({
  post: postSlice.reducer,
  uploadPost: uploadPostSlice.reducer,
  search: searchSlice.reducer,
  loadComment: commentSlice.reducer,
  user: userSlice.reducer,
});

export default rootReducer;
