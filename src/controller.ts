import axios from "axios"
import {getAllRoversFromNasaAPI, getRoverPhotosFromNasaAPI, getRoverPhotosWithCameraFromNasaAPI} from "./services";
import {RoverResponse} from "./models/rover";
import {Photo} from "./models/photo";

export async function getAllRovers(): Promise<any> {
    const roverAxiosResponse =  await getAllRoversFromNasaAPI();
    return roverAxiosResponse.data;
}

export async function getRoverPhotosWithCamera(rover: string, camera: string): Promise<any> {
    const photosAxiosResponse = await getRoverPhotosWithCameraFromNasaAPI(rover, camera);
    return photosAxiosResponse.data;
}

export async function getRoverPhotos(rover: string): Promise<any> {
    const response = await getRoverPhotosFromNasaAPI(rover);
    return response.data;
}

export async function getAllRoverPhotos(): Promise<any> {
    const roverAxiosResponse = await getAllRoversFromNasaAPI();
    const roverResponse: RoverResponse = roverAxiosResponse.data;
    const allPhotos: object[] = [];

    for (const rover of roverResponse.rovers) {
        const photosAxiosResponse = await getRoverPhotosFromNasaAPI(rover.name)
        const photosArray: Photo[] = photosAxiosResponse.data.photos;
        allPhotos.push(...photosArray);
    }

    // return await roverResponse.rovers.reduce(async (accp, rover) => {
    //     const photosResponse = await getRoverPhotosFromNasaAPI(rover.name);
    //     const photosArray: object[] = photosResponse.data.photos;
    //     const acc = await accp;
    //     return acc.concat(photosArray);
    // }, []);

    return allPhotos;
}