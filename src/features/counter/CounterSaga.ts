import { PayloadAction } from '@reduxjs/toolkit';
import { call, delay, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { fetchCount } from './counterAPI';
import { incrementSaga, incrementSagaSuccess } from './counterSlice';

function* test() {
  yield fetchCount(2);
  // and
  yield call(fetchCount, 2);
}

function* handleIncrementSaga(action: PayloadAction<number>) {
  // Wait 1s
  console.log('Waiting 1s');
  yield delay(1000);

  console.log('Waiting done, dispatch action');
  // Dispatch action success
  yield put(incrementSagaSuccess(action.payload));
}

export default function* counterSaga() {
  // yield takeEvery(incrementSaga.toString(), handleIncrementSaga);
  yield takeLatest(incrementSaga.toString(), handleIncrementSaga);
}
