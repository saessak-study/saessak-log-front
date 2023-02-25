import { combineReducers } from 'redux';

import postSlice from './post';
import searchSlice from './search';
import imageSlice from './image';

// (이전상태, 액션) => 다음상태
const rootReducer = combineReducers({
  post: postSlice.reducer,
  search: searchSlice.reducer,
  image: imageSlice.reducer,
});

export default rootReducer;
