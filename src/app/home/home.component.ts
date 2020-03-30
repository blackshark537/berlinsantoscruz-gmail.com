import { Component, OnInit } from '@angular/core';
import { tileLayer, latLng, circle, marker, MapOptions, Icon, icon } from 'leaflet';
import { coords } from '../models/geofence.interface';
import { Store } from '@ngrx/store';
import { AppState } from '../models/app.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  myPosition: coords;
  layers = [];
  layersControl;
  options: MapOptions;
  map: boolean;
  center;
  
  constructor(
    private store: Store<AppState>,
  ) { }

  async ngOnInit() {
    this.map = false;
    this.myPosition = {
      accuracy: 0,
      latitude: 0,
      longitude: 0
    };

    this.options = {
      layers: [
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '...' })
      ],
      zoom: 13,
      center: null
    };

    await this.store.select('Position').subscribe(coords => {
      this.myPosition.latitude = coords.latitude;
      this.myPosition.longitude = coords.longitude;
      this.options.center = latLng(this.myPosition.latitude, this.myPosition.longitude);
    });

    await this.store.select('Fences').subscribe(fences =>{
      fences.map(fence =>{
         this.layers.push(
          circle([fence.latitude, fence.longitude], { radius: fence.radius }),
           marker([fence.latitude, fence.longitude])
          )
      });
    });

    setTimeout(() => {
      this.map = true;
      this.setLayer();
    }, 500);
  }

  setLayer(): void{
    this.layers.push(marker([this.myPosition.latitude, this.myPosition.longitude], {
      autoPan: true,
      icon: icon({
        iconSize: [ 31, 41 ],
        iconAnchor: [ 13, 41 ],
        iconUrl: 'assets/marker-96.png',
        shadowUrl: 'assets/marker-shadow.png'
     })
    }));
  }
}
