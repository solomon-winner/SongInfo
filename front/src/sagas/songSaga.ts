import { takeLatest, call, put, take, takeEvery } from "redux-saga/effects";
import {setSongs, addSong, updateSong, deleteSong} from "../Store/SongSlice";
import * as Request from './axios';
import { Song } from "../Store/SongSlice";

//watcher for fetching the song list
function* fetchSongs() {
    try {
        const songs: Song[] = yield call(Request.Fetch)
        yield put(setSongs(songs));
    } catch (error) {
        console.log(error)
    }
}
export function* watchFetch() {
    yield takeLatest('songs/songLoading', fetchSongs);
}

//watcher for adding the song 

function* AddSong(action: Song) {
    try {
    } catch {

    }
}
//  export function* watchAdd() {
//     yield takeLatest('songs/addLoading',AddSong)
//  }

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

 