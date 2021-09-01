import { PayloadAction } from '@reduxjs/toolkit';
import { delay, put, takeLatest } from 'redux-saga/effects';
import { incrementSaga, incrementSagaSuccess } from './counterSlice';

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
