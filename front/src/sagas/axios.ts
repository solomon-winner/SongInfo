import axios, { AxiosError } from "axios";

const BaseURL = "http://localhost:8080"

interface Data {
    tittle: string,
    artist: string,
    album: string;
    genre: string;
}
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
export const Fetch = async()=> {
    try {
        const response = await axios.get(`${BaseURL}/Back/Song`);
        return response.data;
    } catch (error) {
        handleError(error, 'Failed to Fetch Songs')
    }
}

export const Add = async(song:Data) => {
    try {
        const reponse =await axios.post(`${BaseURL}/Back/Song`,song)
        return reponse.data;
    } catch (error) {
        handleError(error, 'Failed to add Song')
    }
}
export const Update = async(id: string,updatedSong: Data) => {
    try {
        const response = await axios.put(`${BaseURL}/Back/Song/${id}`,updatedSong)
        return response.data
    } catch (error) {
        handleError(error, 'Failed to Update the Song')
    }
}
export const Delete = async() => {
    try {} catch (error) {}
}
export const Stat = async() => {
    try {} catch (error) {}
}