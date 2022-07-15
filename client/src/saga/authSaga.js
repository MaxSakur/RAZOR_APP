import { put, takeEvery, call } from 'redux-saga/effects';
import api from '../api';
import { TRY, setUserAC } from './../reducers/userReducer';
import { Navigate } from 'react-router-dom';

// WORKER
function* fetchUserWorker() {
  const data = yield call(api.login);
  yield put(setUserAC(data));
  //   yield put(Navigate(data.status === 'OK' ? '/yes' : '/no'));
}

// WATCHER
export function* authSaga() {
  yield takeEvery(TRY, fetchUserWorker);
}
