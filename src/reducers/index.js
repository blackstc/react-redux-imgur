import { combineReducers } from 'redux';
import TopicsReducer from './reducer-topics';

const rootReducer = combineReducers({
  topics: TopicsReducer
});

export default rootReducer;
