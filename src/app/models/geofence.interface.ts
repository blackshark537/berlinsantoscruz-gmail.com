export interface GeofenceInterface{
    id: string;
    latitude: number;
    longitude: number;
    radius: number;
    transitionType: number;
    notification: notification;
}

interface notification{
    text: string;
}

export interface PositionInterface {
    // The GPS coordinates along with the accuracy of the data
    coords : cords;
    // Creation timestamp for coords
    timestamp : number;
}

interface cords{
    latitude: number;
    longitude: number;
    accuracy: number;
}