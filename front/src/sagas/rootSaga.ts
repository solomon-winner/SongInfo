import {all} from 'redux-saga/effects';
import {  watchAdd, watchDetail, watchUpdate,watchStat } from './songSaga';
export default function* rootSaga() {
    yield all([
        watchAdd(),
        watchDetail(),
        watchUpdate(),
        watchStat()
    ])
}