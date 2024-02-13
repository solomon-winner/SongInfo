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
        handleError(error, 'failed to Fetch Songs')
    }
}
export const Add = async() => {
    try {} catch (error) {}
}
export const Update = async() => {
    try {} catch (error) {}
}
export const Delete = async() => {
    try {} catch (error) {}
}
export const Stat = async() => {
    try {} catch (error) {}
}