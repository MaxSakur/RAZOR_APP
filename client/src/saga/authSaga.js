import { put, takeEvery, call } from 'redux-saga/effects';
import api from '../api';
import {
  LOGIN,
  AUTHORIZE,
  REGISTRATION,
  setUserAC,
  logOutAC,
} from './../store/reducers/userReducer';

// WORKERS
function* autorizeUserWorker() {
  const response = yield call(api.authorize);

  if (response.status === 200 && response.data.token) {
    yield put(setUserAC(response.data));
    localStorage.setItem('user_token', response.data.token);
  } else {
    // TODO: Add logic for check token date expiration
    yield put(logOutAC());
  }
}

function* loginUserWorker(action) {
  const response = yield call(api.login, action.payload);
  if (response.status === 200 && response.data.token) {
    yield put(setUserAC(response.data));
    localStorage.setItem('user_token', response.data.token);
  } else {
    console.log(response.message);
  }
}

function* registerUserWorker(action) {
  const response = yield call(api.registration, action.payload);
  console.log(response);
  if (response.status === 200) {
    const loginResponse = yield call(api.login, action.payload);
    yield put(setUserAC(loginResponse.data));
    localStorage.setItem('user_token', loginResponse.data.token);
  } else {
    console.log(response.message);
  }
}

// WATCHER
export function* authSaga() {
  yield takeEvery(AUTHORIZE, autorizeUserWorker);
  yield takeEvery(LOGIN, loginUserWorker);
  yield takeEvery(REGISTRATION, registerUserWorker);
}
