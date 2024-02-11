import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Display {
    navbar: boolean;
    popUp: boolean;
}
const initialState: Display = {
    navbar: false,
    popUp: false,
};

 const DisplaySlice = createSlice ({
    name: 'display',
    initialState,
    reducers: {
        setScrolled(state,action: PayloadAction<boolean>) {
            state.navbar = action.payload;
        },
        setPopUp(state,action:PayloadAction<boolean>) {
            state.popUp = action.payload
        }
    }
})

export const {setScrolled, setPopUp} = DisplaySlice.actions;

export default DisplaySlice;