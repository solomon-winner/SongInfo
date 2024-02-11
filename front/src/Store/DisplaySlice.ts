import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Display {
    navbar: boolean;
    Detail: boolean;
    Update: boolean;
    Add: boolean;
    Delete: boolean;
    Another: boolean
}
const initialState: Display = {
    navbar: false,
    Detail: false,
    Update: false,
    Add: false,
    Delete: false,
    Another: false
};

 const DisplaySlice = createSlice ({
    name: 'display',
    initialState,
    reducers: {
        setScrolled(state,action: PayloadAction<boolean>) {
            state.navbar = action.payload;
        },
        showDetail(state,action:PayloadAction<boolean>) {
            state.Detail = action.payload
        },
        showUpdate(state,action:PayloadAction<boolean>) {

        },
        showAdd(state,action:PayloadAction<boolean>) {

        },
        showDelete(state,action:PayloadAction<boolean>) {

        },
        showAnother(state,action:PayloadAction<boolean>) {

        }
    }
})

export const {setScrolled, showDetail} = DisplaySlice.actions;

export default DisplaySlice;