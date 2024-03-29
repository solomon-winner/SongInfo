import DisplaySlice from "./DisplaySlice"
import FilterSlice from "./FilterSlice"
import selectedSlice from "./SelectedSongSlice"
import  SongSlice from "./SongSlice"
import { statSlice } from "./statSlice"

export interface DisplayType {
    display: ReturnType<typeof DisplaySlice.reducer>
} 
export interface StatType {
    stat: ReturnType<typeof statSlice.reducer>
}
export interface FetchType {
    songs: ReturnType<typeof SongSlice.reducer>
}
export interface SelectType {
    selected: ReturnType<typeof selectedSlice.reducer>
}
export interface FilterType {
    filter: ReturnType<typeof FilterSlice.reducer>
}