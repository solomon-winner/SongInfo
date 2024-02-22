import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export interface Display {
    navbar: boolean;
    Detail: boolean;
    Update: boolean;
    Add: boolean;
    Delete: boolean;
    Another: boolean
    Menu : boolean;
    Err : boolean
}
const initialState: Display = {
    navbar: false,
    Detail: false,
    Update: false,
    Add: false,
    Delete: false,
    Another: false,
    Menu: false,
    Err: false
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
            state.Another = false;
            state.Update = false;
            state.Add = false;
        },
        showUpdate(state,action:PayloadAction<boolean>) {
            state.Update = action.payload
            state.Another = false;
            state.Detail = false;
            state.Add = false;
        },
        showAdd(state,action:PayloadAction<boolean>) {
            state.Add = action.payload
            state.Another = false;
            state.Detail = false;
            state.Update = false;
        },
        showDelete(state,action:PayloadAction<boolean>) {
            state.Delete = action.payload
            state.Another = false;
            state.Add = false;
            state.Update= false;
        },
        showAnother(state,action:PayloadAction<boolean>) {
            state.Another = action.payload
            state.Update = false;
            state.Detail = false;
            state.Add = false;
        },
        showMenu(state) {
            state.Menu = !state.Menu;
        }
        ,showErr (state) {
            state.Err = !state.Err
            state.Detail =false
            state.Update =false
            state.Add = false
            state.Delete = false
            state.Another = false
            state.Menu = false
        }
    }
})

export const {setScrolled, showDetail, showAdd, showAnother, showDelete, showUpdate, showMenu, showErr} = DisplaySlice.actions;

export default DisplaySlice;