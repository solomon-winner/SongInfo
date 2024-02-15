import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface stat {
    totalSongs: number;
    artists: number;
    albums: number;
    genres: number
}
interface InitialState {
    statisctics:stat;
    loading: boolean;
    error: boolean;
}
interface Genere {
    _id: string;
    count: number
}
interface ArtistAlbum {
    _id: string;
    artist: string;
    album: string;
    count: number;
}
const initialState: InitialState = {
    statisctics: {
        totalSongs: 0,
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
            state.loading = true
        },
        setStat (state, action: PayloadAction<Partial<stat>>) {
            return {...state, ...action.payload};
        }
    }

}) 

export const {setStat} = statSlice.actions;