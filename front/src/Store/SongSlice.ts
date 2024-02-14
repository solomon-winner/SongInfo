
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ObjectId} from 'mongodb'
import { Init } from "v8";
export interface Song {
    _id:  ObjectId;
    tittle: string;
    artist: string;
    album: string;
    genre: string;
}
interface InitialState {
    songs:Song[];
     loading: boolean;
     error: string;
     success: boolean;
}
const initialState: InitialState = {
    songs:[],
     loading: false,
     error: "",
     success: false
};

 const SongSlice = createSlice({
    name: 'songs',
    initialState,
    reducers: {
        setSongs(state, action: PayloadAction<Song[]>){
            state.songs = action.payload;
        },
        addSong(state, action: PayloadAction<Song>) {

        },
        updateSong(state, action: PayloadAction<Song>) {

                },
        deleteSong(state, action: PayloadAction<Song>) {

        },
        
    }
})


 export const {setSongs, addSong, updateSong, deleteSong} = SongSlice.actions

 export default SongSlice;