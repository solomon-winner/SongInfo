import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface Song {
    tittle: string;
    artist: string;
    album: string;
    genre: string;
}

const initialState: Song[] = [];

export const SongSlice = createSlice({
    name: 'songs',
    initialState,
    reducers: {
        setSongs(state, action){
            return action.payload;
        },
        addSong(state, action) {
            state.push(action.payload);
        },
        updateSong(state, action) {

                },
        deleteSong(state, action) {

        }
    }
})
 export const {setSongs, addSong, updateSong, deleteSong} = SongSlice.actions