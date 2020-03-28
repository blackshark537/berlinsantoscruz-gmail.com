import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { PositionInterface } from '../models/geofence.interface';

const { Geolocation } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() { }

  async getLocation(): Promise<PositionInterface> {
    return await Geolocation.getCurrentPosition();
  }

}
