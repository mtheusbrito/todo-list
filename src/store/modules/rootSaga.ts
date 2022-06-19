import { SagaIterator } from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import task from './task/sagas';

export default function* rootSaga(): SagaIterator {
  return yield all([task]);
}
