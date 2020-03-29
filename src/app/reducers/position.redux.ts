import { Action, createReducer, on} from '@ngrx/store';
import * as stateAction from '../actions/state.actions';
import { coords } from '../models/geofence.interface';

const initial_state: coords = {
    latitude: 0,
    longitude: 0,
    accuracy: 0
};

const PositionReducer = createReducer(initial_state, 
    on(stateAction.updatePosition, (state, coords) =>{
        return {...coords};
    })
);

export function positionRedux(state: coords, actions: Action){
    return PositionReducer(state, actions);
}