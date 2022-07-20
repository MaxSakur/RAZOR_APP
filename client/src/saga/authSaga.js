import { put, takeEvery, call } from 'redux-saga/effects';
import api from '../api';
import {
  LOGIN,
  AUTHORIZE,
  REGISTRATION,
  setUserAC,
} from './../store/reducers/userReducer';

// WORKERS
function* loginUserWorker() {
  const response = yield call(api.login);
  if (response.status === 200 && response.data.token) {
    yield put(setUserAC(response.data));
    localStorage.setItem('user_token', response.data.token);
  } else {
    console.log(response.message);
  }
}
function* autorizeUserWorker() {
  const response = yield call(api.authorize);
  if (response.status === 200 && response.data.token) {
    console.log(response.data);
    yield put(setUserAC(response.data));
    localStorage.setItem('user_token', response.data.token);
  } else {
    console.log(response.message);
  }
}

// WATCHER
export function* authSaga() {
  yield takeEvery(AUTHORIZE, autorizeUserWorker);
  yield takeEvery(LOGIN, loginUserWorker);
  yield takeEvery(REGISTRATION, loginUserWorker);
}
