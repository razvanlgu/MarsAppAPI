import axios from "axios";

export async function getAllRoversFromNasaAPI(): Promise<any> {
    return axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=mg0fxKlo2tMDR80bGb6K70z1BsfxBwGHwKyxPeas');
}

export async function getRoverPhotosWithCameraFromNasaAPI(rover: string, camera: string): Promise<any> {
    return axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=100&camera=${camera}&api_key=mg0fxKlo2tMDR80bGb6K70z1BsfxBwGHwKyxPeas`);
}

export async function getRoverPhotosFromNasaAPI(rover: string): Promise<any> {
    return axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=100&api_key=mg0fxKlo2tMDR80bGb6K70z1BsfxBwGHwKyxPeas`);
}