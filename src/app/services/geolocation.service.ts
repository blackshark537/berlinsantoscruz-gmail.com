import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { PositionInterface } from '../models/geofence.interface';
import { Store } from '@ngrx/store';
import { AppState } from '../models/app.state';
import * as Actions from '../actions/state.actions';

const { Geolocation, LocalNotifications } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor(
    private store: Store<AppState>
  ) {

  }

  async getLocation(): Promise<PositionInterface> {
    return await Geolocation.getCurrentPosition();
  }

  watchPosition() {
    const wait = Geolocation.watchPosition({}, async(position, err) => {
      //dispatch a action
      if(err) alert('Please turn GPS on')
      let {longitude, latitude, accuracy} = position.coords;
      await this.store.dispatch(Actions.updatePosition({longitude, latitude, accuracy}));
    });
  }

  async monitor():Promise <monitor> {
    return new Promise(async (resolve, reject)=>{
      let monitor: monitor = {};
      monitor.callbackID = await Geolocation.watchPosition({}, (position, error)=>{
        if(error) reject(error);
        console.log('Monitor ->',position);
        monitor.position = position;
      });
      resolve(monitor);
    });
  }

}

interface monitor{
  position?: PositionInterface;
  callbackID?: string;
}