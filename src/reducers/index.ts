import { combineReducers } from 'redux';

import postSlice from './post';
import searchSlice from './search';

// (이전상태, 액션) => 다음상태
const rootReducer = combineReducers({
  post: postSlice.reducer,
  search: searchSlice.reducer,
});

export default rootReducer;
