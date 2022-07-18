import { combineReducers } from 'redux';
import characterReducer from './characterReduser';
import userReducer from './userReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  character: characterReducer,
});
