import { GeofenceInterface, pickFence, PositionInterface } from './geofence.interface';

export interface AppState{
    Fences: GeofenceInterface[];
    fence: pickFence;
    Position: PositionInterface;
}
