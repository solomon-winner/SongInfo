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
     Fetch_loading: boolean;
     error: string;
     success: boolean;
}
const initialState: InitialState = {
    songs:[],
     Fetch_loading: false,
     error: "",
     success: false
};

 const SongSlice = createSlice({
    name: 'songs',
    initialState,
    reducers: {
        songLoading(state) {
            state.Fetch_loading = true;
        },
        setSongs(state, action: PayloadAction<any>){
            state.songs = action.payload;
            state.Fetch_loading = false;
            state.success = true;
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