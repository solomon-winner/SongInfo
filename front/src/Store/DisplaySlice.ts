import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Display {
    navbar: boolean;
}
const initialState: Display = {
    navbar: false
};

 const DisplaySlice = createSlice ({
    name: 'display',
    initialState,
    reducers: {
        setDisplay(state,action: PayloadAction<boolean>) {
            state.navbar = action.payload;
        }
    }
})

export const {setDisplay} = DisplaySlice.actions;

export default DisplaySlice;