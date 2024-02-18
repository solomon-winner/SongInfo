import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Song } from "./SongSlice";

interface select {
    
        _id: string;
        another: boolean
    }

const initialState: select= {
    _id: '',
    another: false,
}
const selectedSlice = createSlice({
    name: 'selected',
    initialState,
    reducers: {
        setSelected (state, action: PayloadAction<string>) {
            state._id = action.payload
        },
        removeSelected (state) {
            state._id = '';
        },
        Another(state,action: PayloadAction<boolean>) {
            state.another = action.payload
        }
    }
})
export const {setSelected, removeSelected} = selectedSlice.actions
export default selectedSlice;