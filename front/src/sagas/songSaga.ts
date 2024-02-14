import { takeLatest, call, put, take } from "redux-saga/effects";
import {setSongs, addSong, updateSong, deleteSong} from "../Store/SongSlice";
import * as Request from './axios';
import { Song } from "../Store/SongSlice";
import { BaseURL } from "./axios";
import axios from "axios";
//watcher for fetching the song list
function* fetchSongs(): Generator<any, void, any> {
    try {
        const songs = yield call(() => axios.get(`${BaseURL}/Back/Song`));
        yield put(setSongs(songs));
    } catch (error) {
        console.log(error);
    }
}

export function* watchFetch() {
    yield takeLatest(setSongs.type, fetchSongs);
}

//watcher for adding the song 

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