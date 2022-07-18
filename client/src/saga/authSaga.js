import { put, takeEvery, call } from 'redux-saga/effects';
import api from '../api';
import { history } from '../store';
import { LOGIN, setUserAC } from './../store/reducers/userReducer';

// WORKER
function* fetchUserWorker() {
  const response = yield call(api.login);
  if (response.status === 200 && response.data.token) {
    yield put(setUserAC(response.data));
    localStorage.setItem('user_token', response.data.token);
    yield call(history.push, '/cart');
  } else {
    console.log(response.message);
  }
  //   yield put(Navigate(data.status === 'OK' ? '/yes' : '/no'));
}

// WATCHER
export function* authSaga() {
  yield takeEvery(LOGIN, fetchUserWorker);
}
