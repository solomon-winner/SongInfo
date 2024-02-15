import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface Song {
    _id:  string;
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
        songLoading(state) {
            state.loading = true;
        },
        setSongs(state, action: PayloadAction<any>){
            state.songs = action.payload;
            state.loading = false;
        },
        songFetchError: (state, action) => {
            state.error = action.payload
        },
        addSong(state, action: PayloadAction<Song>) {

        },
        updateSong(state, action: PayloadAction<Song>) {

                },
        deleteSong(state, action: PayloadAction<Song>) {

        },
        
    }
})


 export const {songLoading, songFetchError, setSongs, addSong, updateSong, deleteSong} = SongSlice.actions

 export default SongSlice;