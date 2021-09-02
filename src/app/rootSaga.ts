import { all } from 'redux-saga/effects';

import counterSaga from 'features/counter/CounterSaga';
import authSaga from 'features/auth/authSaga';

export default function* rootState() {
  yield all([authSaga(), counterSaga()]);
}
