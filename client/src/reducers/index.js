import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import characterReducer from './characterReduser';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  character: characterReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
