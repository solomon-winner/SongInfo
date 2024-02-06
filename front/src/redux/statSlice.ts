import { createSlice } from "@reduxjs/toolkit";

interface stat {
    totalSong: 0,
        artists: 0,
        albums: 0,
        genres: 0,
}
const initialState: stat [] =[]
export const statSlice = createSlice({
    name: 'stat',
    initialState,
    reducers : {
        
    }
}) 