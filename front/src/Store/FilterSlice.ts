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

        },
        albumInput (state, action:PayloadAction<boolean>) {
            
        },
        artistInput (state, action:PayloadAction<boolean>) {
            
        },
        genreInput (state, action:PayloadAction<boolean>) {
            
        }
    }
})

export const {titleInput, albumInput, artistInput, genreInput} = FilterSlice.actions;
export default FilterSlice;