import { combineReducers } from 'redux';

import postSlice from './post';
import uploadPostSlice from './uploadPost';

// (이전상태, 액션) => 다음상태
const rootReducer = combineReducers({
  post: postSlice.reducer,
  uploadPost: uploadPostSlice.reducer,
});

export default rootReducer;
