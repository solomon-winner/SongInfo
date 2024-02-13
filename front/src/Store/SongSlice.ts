import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { Fetch } from "../sagas/axios";
 export interface Song {
    tittle: string;
    artist: string;
    album: string;
    genre: string;
}

const initialState: Song[] = [];

 const SongSlice = createSlice({
    name: 'songs',
    initialState,
    reducers: {
        setSongs(state, action: PayloadAction<Song[]>){
            state =action.payload;
            console.log("the saga works successfully  "+state);
        },
        addSong(state, action: PayloadAction<Song>) {
            state.push(action.payload);
        },
        updateSong(state, action: PayloadAction<Song>) {

                },
        deleteSong(state, action: PayloadAction<Song>) {

        },
        
    }
})
 export const {setSongs, addSong, updateSong, deleteSong} = SongSlice.actions

 export default SongSlice;