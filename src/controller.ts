import axios from "axios"
import {getAllRoversFromNasaAPI, getRoverPhotosFromNasaAPI, getRoverPhotosWithCameraFromNasaAPI} from "./services";

export async function getAllRovers(): Promise<any> {
    const response =  await getAllRoversFromNasaAPI();
    console.log(response.data);
    return response.data;
}

export async function getRoverPhotosWithCamera(rover: string, camera: string): Promise<any> {
    const response = await getRoverPhotosWithCameraFromNasaAPI(rover, camera);
    console.log(response.data);
    return response.data;
}

export async function getRoverPhotos(rover: string): Promise<any> {
    const response = await getRoverPhotosFromNasaAPI(rover);
    console.log(response.data);
    return response.data;
}