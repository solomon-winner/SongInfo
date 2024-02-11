import DisplaySlice from "./DisplaySlice"
import { statSlice } from "./statSlice"

export interface DisplayType {
    display: ReturnType<typeof DisplaySlice.reducer>
} 
export interface StatType {
    stat: ReturnType<typeof statSlice.reducer>
}