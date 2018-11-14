import { combineReducers } from 'redux';
import ideas from './ideas-reducer';

const rootReducer = combineReducers({
  ideas,
});

export default rootReducer;
