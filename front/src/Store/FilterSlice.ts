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