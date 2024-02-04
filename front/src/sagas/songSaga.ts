import { takeLatest, call, put, take } from "redux-saga/effects";
import {setSongs, addSong, updateSong, deleteSong} from "../redux/SongSlice";
// import {} from '../Back/index.js
function* fetchSongs() {
    try {
        //const songs = yield call()
        //yield put(setSongs());
    } catch (error) {
       // yield put(setError(error.message));
    }
}

export function* watchFetch() {
    yield takeLatest(setSongs.type, fetchSongs);
}