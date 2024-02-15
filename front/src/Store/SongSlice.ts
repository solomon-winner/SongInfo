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
     Add_loading: boolean;
     Add_Success:boolean;
     Update_loading:boolean;
     Update_Success:boolean;
     Delete_loading:boolean;
     Delete_Success:boolean;
     error: string;
     Fetch_Success: boolean;
}
const initialState: InitialState = {
    songs:[],
     Fetch_loading: false,
     Add_loading: false,
     Add_Success:false,
     Update_loading:false,
     Update_Success: false,
     Delete_loading: false,
     Delete_Success: false,
     error: "",
     Fetch_Success: false
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
            state.Fetch_Success = true;
        },
        songFetchError: (state, action) => {
            state.error = action.payload
        },
        addLoading (state) {
            state.Add_loading = true
        },
        addSong(state, action: PayloadAction<Song>) {
            state.songs.push(action.payload);
            state.Add_loading = false;
            state.Add_Success = true;
        },
        addError(state,action) {

        },
        updateLoading (state,action) {
            state.Update_loading = true
        },
        updateError (state,action) {

        },
        updateSong(state, action: PayloadAction<Song>) {

        },
        deleteLoading(state) {
            state.Delete_loading = true
        },
        deleteSong(state, action: PayloadAction<Song>) {

        },
        deleteError(state, action) {

        }
        
    }
})


 export const {songLoading, songFetchError, setSongs,
                addLoading,addSong, addError,
                updateLoading,updateSong, updateError,
                deleteLoading, deleteSong , deleteError} = SongSlice.actions

 export default SongSlice;