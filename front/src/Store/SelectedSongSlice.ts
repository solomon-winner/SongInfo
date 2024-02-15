import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Song } from "./SongSlice";

const initialState: Song= {
    _id: '',
    tittle: '',
    artist: '',
    album: '',
    genre: ''
}
const selectedSlice = createSlice({
    name: 'selected',
    initialState,
    reducers: {
        setSelected (state, action: PayloadAction<Song>) {

        },
        removeSelected (state) {
            
        }
    }
})