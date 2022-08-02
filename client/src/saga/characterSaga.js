import { put, takeEvery, call } from 'redux-saga/effects';
import api from '../api';
import {
  registerCharacterAC,
  UPDATE_CHARACTER,
} from '../store/reducers/characterReduser';

// WORKERS
function* updateCharacterWorker(action) {
  const response = yield call(api.characterRegistration, action.payload);
  if (response.status === 200) {
    yield put(registerCharacterAC(response.data.isCharacterRegistered));
  } else {
    console.warn('updateCharacterWorker error', response);
  }
}

// WATCHER
export function* characterSaga() {
  yield takeEvery(UPDATE_CHARACTER, updateCharacterWorker);
}
