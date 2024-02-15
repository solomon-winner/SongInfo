import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface stat {
        songs: number,
        artists: number,
        albums: number,
        genres: number,
}
interface Interface {
    statisctics:stat;
    loading: boolean;
    error: boolean;
}
const initialState: Interface = {
    statisctics: {
        songs: 0,
        artists: 0,
        albums: 0,
        genres: 0,
    },
    loading: false,
    error: false
}
export const statSlice = createSlice({
    name: 'stat',
    initialState,
    reducers : {
        statLoading(state) {

        },
        setStat (state, action: PayloadAction<Partial<stat>>) {
            return {...state, ...action.payload};
        }
    }

}) 

export const {setStat} = statSlice.actions;