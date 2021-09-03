import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import authReducer from 'features/auth/authSlice';
import counterReducer from '../features/counter/counterSlice';
import rootSaga from './rootSaga';
import { history } from 'utils';

const rootReducer = combineReducers({
  router: connectRouter(history),
  auth: authReducer,
  counter: counterReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware, routerMiddleware(history)),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
