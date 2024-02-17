import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface songs {
    id: string
    tittle: string;
    album: string;
    genre: string;
}
interface InitialState {
    selectedSong: songs[]
}

const initialState: InitialState = {
    selectedSong: []
}
export const statSlice = createSlice({
    name: 'stat',
    initialState,
    reducers : {
        CualculateStat(state,action) {
            state.selectedSong.push(action.payload);
        }
    }

}) 

export const {CualculateStat} = statSlice.actions;