import { takeLatest, call, put, takeLeading } from "redux-saga/effects";
import {setSongs,addSong, updateSong, deleteSong, addError, updateError, deleteError} from "../Store/SongSlice";
import * as Request from './axios';
import { Song } from "../Store/SongSlice";
import { songFetchError } from "../Store/SongSlice";
//watcher for fetching the song list
function* fetchSongs() {
    try {
        const songs: Song[] = yield call(Request.Fetch)
        yield put(setSongs(songs));
    } catch (error) {
        yield put(songFetchError("Failed to fetch the songs!"));

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
    yield put(addError("Failed to Add the Song!"))    
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
    }catch(error){
        yield put(updateError("Failed to Update the Song!"))    
    }
 }

 export function* watchUpdate () {
yield takeLatest('songs/updateLoading',UpdateSong)
 }

 //wather for delete song

 function* DeleteSong (action:any) {
    try{
         yield call(Request.Delete,action.payload);
         yield put (deleteSong(action.payload));
    }catch(error){
        yield put(deleteError("Failed to delete the Song!"))    
    }
 }

 export function* watchDelete () {
yield takeLeading('songs/deleteLoading',DeleteSong)
 }

 