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
    ArtistSongs: Song[],
    SearchedSongs: Song[],
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
    ArtistSongs: [],
    SearchedSongs: [],
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
            state.SearchedSongs = action.payload;
            state.Fetch_loading = false;
            state.Fetch_Success = true;
        },
        songFetchError: (state, action) => {
            state.error = action.payload
        },
        addLoading (state,action) {
            state.Add_loading = true
        },
        addSong(state, action: PayloadAction<Song>) {
            state.songs.push(action.payload);
            state.Add_loading = false;
            state.Add_Success = true;
        },
        addError(state,action) {
            state.error = action.payload
        },
        updateLoading (state,action) {
            state.Update_loading = true
        },
        updateError (state,action) {
            state.error = action.payload
        },
        updateSong(state, action: PayloadAction<Song>) {
            const index = state.songs.findIndex(song => song._id ===action.payload._id);
            if(index !== -1)
                state.songs[index] = action.payload;

            state.Update_loading = false;
            state.Update_Success = true;
        },
        deleteLoading(state, action) {
            state.Delete_loading = true
        },
        deleteSong(state, action: PayloadAction<string>) {
            state.songs = state.songs.filter((song) => song._id !== action.payload);
            state.Delete_loading = false;
            state.Delete_Success = true;
        },
        deleteError(state, action) {
            state.error = action.payload
        },
        Filter(state,action:PayloadAction<string>) {
            state.ArtistSongs = state.songs.filter((songs) =>songs.artist === action.payload);
        },
        searchByTitle (state, action:PayloadAction<string>) {
            const query = action.payload.toLowerCase();
            state.SearchedSongs = state.songs.filter(song => 
               song.tittle.toLowerCase().includes(query) 
                )
        },
        searchByArtist (state, action:PayloadAction<string>) {
            const query = action.payload.toLowerCase();
            state.SearchedSongs = state.songs.filter(song => 
               song.tittle.toLowerCase().includes(query) 
                ) 
        },
        searchByAlbum (state, action:PayloadAction<string>) {
            const query = action.payload.toLowerCase();
            state.SearchedSongs = state.songs.filter(song => 
               song.tittle.toLowerCase().includes(query) 
                )
        },
        searchByGenre (state, action:PayloadAction<string>) {
            const query = action.payload.toLowerCase();
            state.SearchedSongs = state.songs.filter(song => 
               song.tittle.toLowerCase().includes(query) 
                )
        }
        
    }
})


 export const {songLoading, songFetchError, setSongs,
                addLoading,addSong, addError,
                updateLoading,updateSong, updateError,
                deleteLoading, deleteSong , deleteError, Filter} = SongSlice.actions

 export default SongSlice;