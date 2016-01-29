import { combineReducers } from 'redux';
import TopicsReducer from './reducer-topics';
import ImageReducer from './reducer-images';

const rootReducer = combineReducers({
  topics: TopicsReducer,
  images: ImageReducer
});

export default rootReducer;
