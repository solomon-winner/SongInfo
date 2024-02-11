import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface stat {
        Songs: number,
        artists: number,
        albums: number,
        genres: number,
}
const initialState: stat = {
        Songs: 23,
        artists: 45,
        albums: 55,
        genres: 12,
}
export const statSlice = createSlice({
    name: 'stat',
    initialState,
    reducers : {
        setStat (state, action: PayloadAction<Partial<stat>>) {
            return {...state, ...action.payload};
        }
    }

}) 

export const {setStat} = statSlice.actions;