import { combineReducers } from 'redux';

import postSlice from './post';
import imageSlice from './image';

// (이전상태, 액션) => 다음상태
const rootReducer = combineReducers({
  post: postSlice.reducer,
  image: imageSlice.reducer,
});

export default rootReducer;
