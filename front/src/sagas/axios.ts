import axios, { AxiosError } from "axios";

const BaseURL = "http://localhost:8080"

interface Data {
    tittle: string,
    artist: string,
    album: string;

}
const handleError = (error: AxiosError, defaultMessage: string ) : void => {

}
export const Fetch = async(): Promise<Data[]> => {
    try {
        const response = await axios.get(`${BaseURL}/Back/Song`);
        return response.data;
    } catch (error) {
        // throw new Error(error.response.data.message)
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