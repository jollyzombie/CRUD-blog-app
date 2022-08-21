import { createStore, combineReducers } from 'redux';
import categoriesReducer from './categoriesRedux';
import postsReducer from './postsRedux';
import initialState from './initialState';

const subreducers = {
  posts: postsReducer,
  categories: categoriesReducer,
}

const reducer = combineReducers(subreducers);
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;