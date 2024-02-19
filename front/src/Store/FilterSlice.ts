import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface FilterBy {
    title: boolean;
    album: boolean;
    artist: boolean;
    genre: boolean;
    default: boolean,
}

const initialState: FilterBy = {
    title: false,
    album: false,
    artist: false,
    genre: false,
    default: true,
}

const FilterSlice = createSlice ({
    name: 'filter',
    initialState,
    reducers: {
        titleInput (state, action:PayloadAction<boolean>) {
            state.title = action.payload
            console.log(" this is from title input")
            state.album = false
            state.artist = false
            state.genre = false
            state.default = false

        },
        albumInput (state, action:PayloadAction<boolean>) {
            state.album = action.payload
            console.log(" this is from album input")

            state.title = false
            state.artist = false
            state.genre = false
            state.default = false

        },
        artistInput (state, action:PayloadAction<boolean>) {
            state.artist = action.payload
            console.log(" this is from artist input")

            state.album = false
            state.title = false
            state.genre = false
            state.default = false

        },
        genreInput (state, action:PayloadAction<boolean>) {
            state.genre = action.payload
            console.log(" this is from genre input")

            state.album = false
            state.artist = false
            state.title = false
            state.default = false
        },
        defaultInput (state, action:PayloadAction<boolean>) {
            state.default = action.payload
            console.log(" this is from default input")
            state.genre = false
            state.album = false
            state.artist = false
            state.title = false
        }
    }
})

export const {titleInput, albumInput, artistInput, genreInput, defaultInput} = FilterSlice.actions;
export default FilterSlice;