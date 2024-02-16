import { takeLatest, call, put, take, takeEvery } from "redux-saga/effects";
import {setSongs, addLoading,addSong, updateSong, deleteSong} from "../Store/SongSlice";
import * as Request from './axios';
import { Song } from "../Store/SongSlice";
import { FetchType } from "../Store/Types";

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

function* AddSong(action:any){
    try {
        const NewSong: Song =yield call(Request.Add,action.payload)
      yield put (addSong(NewSong));
    } catch(error) {
console.log(error)
    }
}
 export function* watchAdd() {
    yield takeLatest('songs/addLoading',AddSong)
 }

 // watcher for updating songs

 function* UpdateSong (action:any) {
    try{
        const updatedSong: Song = yield call(Request.Update, action.payload._id,action.payload)
        yield put(updateSong(updatedSong))
    }catch(error){}
 }

 export function* watchUpdate () {
yield takeLatest('songs/updateLoading',UpdateSong)
 }

 //wather for delete song

 function* DeleteSong () {

 }

 export function* watchDelete () {

 }

 