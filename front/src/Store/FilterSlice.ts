import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface FilterBy {
    title: boolean;
    album: boolean;
    artist: boolean;
    genre: boolean;
}

const initialState: FilterBy = {
    title: true,
    album: false,
    artist: false,
    genre: false
}

const FilterSlice = createSlice ({
    name: 'filter',
    initialState,
    reducers: {
        titleInput (state, action:PayloadAction<boolean>) {
            state.title = action.payload
            state.album = false
            state.artist = false
            state.genre = false
        },
        albumInput (state, action:PayloadAction<boolean>) {
            state.album = action.payload
            state.title = false
            state.artist = false
            state.genre = false
        },
        artistInput (state, action:PayloadAction<boolean>) {
            state.artist = action.payload
            state.album = false
            state.title = false
            state.genre = false
        },
        genreInput (state, action:PayloadAction<boolean>) {
            state.genre = action.payload
            state.album = false
            state.artist = false
            state.title = false
        }
    }
})

export const {titleInput, albumInput, artistInput, genreInput} = FilterSlice.actions;
export default FilterSlice;