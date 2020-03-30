import { Action, createReducer, on} from '@ngrx/store';
import * as stateAction from '../actions/state.actions';
import { pickFence } from '../models/geofence.interface';

const InitialState: pickFence = {
    edit: false
  };

const editFenceReducer = createReducer(InitialState, 
    on(stateAction.editfence, (state, fence) => ({...fence})),
    on(stateAction.newfence, (state, fence) => ({...fence})),
    on(stateAction.clearAll, state => ({edit: false}))
);

export function fenceToEditReducer(state: pickFence, actions: Action){
    return editFenceReducer(state, actions);
}