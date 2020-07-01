import axios, {AxiosResponse} from "axios";
import {RoverResponse} from "./models/rover";
import {PhotoResponse} from "./models/photo";

export async function getAllRoversFromNasaAPI(): Promise<AxiosResponse<RoverResponse>> {
    return axios.get<RoverResponse>('https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=mg0fxKlo2tMDR80bGb6K70z1BsfxBwGHwKyxPeas');
}

export async function getRoverPhotosWithCameraFromNasaAPI(rover: string, camera: string): Promise<AxiosResponse<PhotoResponse>> {
    return axios.get<PhotoResponse>(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=100&camera=${camera}&api_key=mg0fxKlo2tMDR80bGb6K70z1BsfxBwGHwKyxPeas`);
}

export async function getRoverPhotosFromNasaAPI(rover: string): Promise<AxiosResponse<PhotoResponse>> {
    return axios.get<PhotoResponse>(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=100&api_key=mg0fxKlo2tMDR80bGb6K70z1BsfxBwGHwKyxPeas`);
}