import {all} from 'redux-saga/effects';
import { watchFetch, watchAdd, watchUpdate,watchDelete } from './songSaga';
export default function* rootSaga() {
    yield all([
        watchFetch(),
        watchAdd(),
        watchUpdate(),
        watchDelete()
    ])
}