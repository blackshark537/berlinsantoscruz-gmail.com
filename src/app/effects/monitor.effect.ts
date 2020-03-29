import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, pipe } from 'rxjs';
import { map, mergeMap, catchError, first } from 'rxjs/operators'
import { GeolocationService } from '../services/geolocation.service';
import * as stateAction from '../actions/state.actions';

@Injectable()
export class monitorEffect{

    monitor$ = createEffect(()=> this.actions$.pipe(
        ofType(stateAction.monitor),
        catchError(() => EMPTY)
    ));

    constructor(
        private actions$: Actions,
        private geoService: GeolocationService
    ){ }

    see(){

    }
}