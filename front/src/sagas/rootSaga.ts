import {all} from 'redux-saga/effects';
import { watchFetch, watchAdd, watchDetail, watchUpdate,watchStat } from './songSaga';
export default function* rootSaga() {
    yield all([
        watchFetch(),
        watchAdd(),
        watchDetail(),
        watchUpdate(),
        watchStat()
    ])
}