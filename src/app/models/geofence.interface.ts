export interface GeofenceInterface{
    id: string;
    latitude: number;
    longitude: number;
    radius: number;
    transitionType: number;
    notification: notification;
}

interface notification{
    id?:             number; //any unique ID
    title?:           string; //notification title
    text:            string; //notification body
    openAppOnClick?: boolean; //open app when notification is tapped
}

export interface PositionInterface {
    // The GPS coordinates along with the accuracy of the data
    coords?: cords;
    // Creation timestamp for coords
    timestamp: number;
}

interface cords{
    latitude: number;
    longitude: number;
    accuracy: number;
}

export interface pickFence{
    index?: number;
    edit: boolean;
    fence?: GeofenceInterface;
}