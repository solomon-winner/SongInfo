import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Display {
    navbar: boolean;
}
const initialState: Display[] = [];

export const DisplaySlice = createSlice ({
    name: 'display',
    initialState,
    reducers: {
        setDisplay(state,action: PayloadAction<Display>) {

        }
    }
})

export const {setDisplay} = DisplaySlice.actions;