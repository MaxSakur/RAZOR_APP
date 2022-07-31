import { all } from 'redux-saga/effects';
import { authSaga } from './authSaga';
import { characterSaga } from './characterSaga';

export function* rootSaga() {
  yield all([authSaga(), characterSaga()]);
}
