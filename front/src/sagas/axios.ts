import axios, { AxiosError, AxiosResponse } from "axios";
import { FetchType } from "../Store/Types";
import { useDispatch } from "react-redux";
import { setSongs } from "../Store/SongSlice";
// import { Song } from "../Store/SongSlice";

export const BaseURL = "http://localhost:8080"


interface ErrorResponse {
    message: string;
}
const handleError = (error: any, defaultMessage: string ) : void => {
if(axios.isAxiosError(error)) {
    const axiosError = error as AxiosError;
    const errorMessage = (axiosError.response?.data as ErrorResponse)?.message || defaultMessage;
    throw new Error(errorMessage);
}
else {
    throw new Error(defaultMessage);
}
}
export const Fetch = async() => {
            const dispatch = useDispatch()

    try {
        const response = await axios.get(`${BaseURL}/Back/Song`);
        console.log("this is the test from axios ... <-=-=-=-=-=-=-=> "+ response.data)
        dispatch(setSongs(response.data));
        return response.data;
    } catch (error) {
        handleError(error, 'Failed to Fetch Songs')
    }
}

export const Add = async(song:FetchType) => {
    try {
        const reponse: AxiosResponse<FetchType> =await axios.post(`${BaseURL}/Back/Song`,song)
        return reponse.data;
    } catch (error) {
        handleError(error, 'Failed to add Song')
    }
}
export const Update = async(id: string,updatedSong: FetchType) => {
    try {
        const response: AxiosResponse <FetchType> = await axios.put(`${BaseURL}/Back/Song/${id}`,updatedSong)
        return response.data
    } catch (error) {
        handleError(error, 'Failed to Update the Song')
    }
}
export const Delete = async(id: string) => {
    try {
     await axios.delete(`${BaseURL}/Back/Song/${id}`)
    } catch (error) {
        handleError(error, 'Failed to Delete The Song');
    }
}
export const Stat = async() => {
    try {
        const response = await axios.get(`${BaseURL}/Back/Song/`)
        return response.data;
    } catch (error) {
        handleError(error, 'Failed to fetch the Statistics')
    }
}