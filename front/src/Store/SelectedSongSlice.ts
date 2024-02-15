import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Song } from "./SongSlice";

interface select {
    
        _id: string;
        
    }

const initialState: select= {
    _id: '',

}
const selectedSlice = createSlice({
    name: 'selected',
    initialState,
    reducers: {
        setSelected (state, action: PayloadAction<string>) {
            state._id = action.payload
        },
        removeSelected (state) {
            
        }
    }
})
export const {setSelected, removeSelected} = selectedSlice.actions
export default selectedSlice;