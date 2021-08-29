import { all } from 'redux-saga/effects';

import counterSaga from 'features/counter/CounterSaga';

function helloSaga() {
  console.log('Hello Saga');
}

export default function* rootState() {
  console.log('Root Saga');
  yield all([helloSaga(), counterSaga()]);
}
