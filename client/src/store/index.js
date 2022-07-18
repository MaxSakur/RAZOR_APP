import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';

import { rootReducer } from './reducers';

import { rootSaga } from '../saga';
import { createLogger } from 'redux-logger';

// Store
const middleware = (store) => (next) => (action) => {
  next(action);
  console.log(store, action);
};

export const history = createBrowserHistory();
export default function getStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware({
    onError: (error) => {
      console.log('error', error);
    },
  });
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(
        sagaMiddleware,
        middleware,
        createLogger({ collapsed: true }),
      ),
    ),
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
