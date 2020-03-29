import { createAction, props } from '@ngrx/store';
import { GeofenceInterface, PositionInterface, pickFence, coords } from '../models/geofence.interface';

export const getFences = createAction('[ GEOFENCES ] get all fences');
export const addFence  = createAction('[ GEOFENCES ] add new fence', props<GeofenceInterface>());
export const delFence  = createAction('[ GEOFENCES ] del one fence', props<{index: number}>());
export const patchFence = createAction('[ GEOFENCES ] patch one fence', props<{fence: GeofenceInterface, index: number}>());

export const newfence = createAction('[ GEOFENCES ] new fence', props<{edit: boolean}>());
export const editfence = createAction('[ GEOFENCES ] edit fence', props<pickFence>());

export const monitor = createAction('[POSITION] Monitor');
export const updatePosition = createAction('[POSITION] Update', props<coords>());
