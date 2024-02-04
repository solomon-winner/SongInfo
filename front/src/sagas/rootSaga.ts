import {all} from 'redux-saga/effects';
import { WatchFetch, watchAdd, watchDetail, watchUpdate,watchStat } from './songSaga';
export default function* rootSaga() {
    yield all([
        watchFetch(),
        
    ])
}