export interface RoverResponse {
    rovers: Rover[]
}

export interface Rover {
    id: number
    name: string
    cameras: object[]
}