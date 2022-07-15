import { all } from 'redux-saga/effects';
import { authSaga } from './authSaga';

export function* rootWatcher() {
  yield all([authSaga()]);
}
