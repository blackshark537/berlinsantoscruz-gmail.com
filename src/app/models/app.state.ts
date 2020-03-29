import { GeofenceInterface, pickFence, coords } from './geofence.interface';

export interface AppState{
    Fences: GeofenceInterface[];
    fence: pickFence;
    Position: coords;
}
