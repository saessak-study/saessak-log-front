import { combineReducers } from 'redux';

import postSlice from './post';

// (이전상태, 액션) => 다음상태
const rootReducer = combineReducers({
  post: postSlice.reducer,
});

export default rootReducer;
