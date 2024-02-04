import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface Song {
    tittle: string;
    artist: string;
    album: string;
    genre: string;
}

const initialState: Song[] = [];

