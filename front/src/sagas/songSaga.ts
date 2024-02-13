import { takeLatest, call, put, take } from "redux-saga/effects";
import {setSongs, addSong, updateSong, deleteSong} from "../Store/SongSlice";
import * as Request from './axios';


// wather for fetching the song list
function* fetchSongs() {
    try {
        const songs = yield call(Request.Fetch)
        yield put(setSongs());
    } catch (error) {
       yield put(setError(error.message));
    }
}

export function* watchFetch() {
    yield takeLatest(setSongs.type, fetchSongs);
}

//wather for adding the song 

function* AddSong() {

}
 export function* watchAdd() {

 }

 // watcher for updating songs

 function* UpdateSong () {

 }

 export function* watchUpdate () {

 }

 //wather for delete song

 function* DeleteSong () {

 }

 export function* watchDelete () {

 }

 //wather for details

 function* Detail () {

 }
 export function* watchDetail () {

 }

 //watcher for the statistics

 function* stat () {

 }
 export function* watchStat () {

 }