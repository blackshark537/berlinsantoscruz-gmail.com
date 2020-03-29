import { Action, createReducer, on} from '@ngrx/store';
import * as stateAction from '../actions/state.actions';
import { GeofenceInterface } from '../models/geofence.interface';

const initial_state: GeofenceInterface[] = [];

const stateReducer = createReducer(initial_state,
    //get all
    on(stateAction.getFences, state => ([...state])),
    //add one
    on(stateAction.addFence, (state, newfence) => ([ ...state, newfence ])),
    //patch one
    on(stateAction.patchFence, (state, {fence, index}) => {
        const arr = [...state]
        return arr.fill(fence, index, index+1);
    }),
    //remove one
    on(stateAction.delFence, (state, {index}) => {
        return [...state.slice(0, index), ...state.slice(index +1)];
    })
)

export function StateReducer(state: GeofenceInterface[] | undefined, actions: Action){
    return stateReducer(state, actions)
}