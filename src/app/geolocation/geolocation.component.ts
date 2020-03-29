import { Component, OnInit } from '@angular/core';
import { tileLayer, latLng, circle, marker } from 'leaflet';
import { GeofenceInterface } from '../models/geofence.interface';
import { GeolocationService } from '../services/geolocation.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../models/app.state';
import * as Actions from '../actions/state.actions';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.scss'],
})
export class GeolocationComponent implements OnInit {

  data: GeofenceInterface;
  layers;
  options;
  map: boolean;
  center;
  index: number;
  edit: boolean;
  
  constructor(
    private geo: GeolocationService,
    private router: Router,
    private store: Store<AppState>
    ) { }

  async ngOnInit() {

    await this.store.select('fence').subscribe( async resp => {
      this.index = resp.index;
      this.edit = resp.edit;
      
      if(resp.edit){
        this.data = {...resp.fence};
        this.data.notification = {...resp.fence.notification};
      } else {
        this.data = {
          id: '',
          latitude: 0,
          longitude: 0,
          notification: {
            text: ''
          },
          radius: 1000,
          transitionType: 1
        };
      }
    });

    if (!this.edit) {
      // get the current position
      await this.geo.getLocation().then(resp => {
        this.data.latitude = resp.coords.latitude;
        this.data.longitude = resp.coords.longitude;
      }).catch(error => alert(error.message));
    }

    // leaflet options
    this.options = {
      layers: [
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '...' })
      ],
      zoom: 13,
      center: latLng(this.data.latitude, this.data.longitude)
    };

    // set the radius and the market position
    this.setLayer();

    // delay map view
    setTimeout(() => this.map = true, 500);
  }

  // refresh the market and circle
  setLayer(): void{
    this.layers = [
      circle([this.data.latitude, this.data.longitude], { radius: this.data.radius }),
      marker([this.data.latitude, this.data.longitude])
    ];
  }

  //set new position
  onSetMarket(evt): void{
    this.data.latitude = evt.latlng.lat;
    this.data.longitude = evt.latlng.lng
    this.center = evt.latLng
    this.setLayer();
  }

  // set transition type
  onSelect(value): void{
    this.data.transitionType = parseInt(value);
  }

  // function to parse meter to kilometer. It only affect the view.
  roundMeters(): string{
    return (this.data.radius*0.001).toPrecision(2);
  }

  getID() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 9; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  //save the geofence
  save(): void{
    if(this.edit){ 
      this.store.dispatch(Actions.patchFence({fence: this.data, index: this.index}))
    } else{ 
      this.data.id = this.getID();
      this.store.dispatch(Actions.addFence(this.data));
    }
    //this.store.dispatch(Actions.initialFence())
    this.router.navigate(['']);
  }

}
