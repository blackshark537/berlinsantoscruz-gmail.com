import { Action, createReducer, on} from '@ngrx/store';
import * as stateAction from '../actions/state.actions';
import { PositionInterface } from '../models/geofence.interface';

const initial_state: PositionInterface = {
        timestamp: 0
};

const PositionReducer = createReducer(initial_state, 
    on(stateAction.updatePosition, (state, position) => position)
);

export function positionRedux(state: PositionInterface, actions: Action){
    return PositionReducer(state, actions);
}