import { Component, OnInit, DoCheck } from '@angular/core';
import { Platform } from '@ionic/angular';
import { tileLayer, latLng, circle, marker, MapOptions, Icon, icon } from 'leaflet';
import { GeofenceInterface, coords } from '../models/geofence.interface';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../models/app.state';
import * as Actions from '../actions/state.actions';
import { Geofence } from '@ionic-native/geofence/ngx';
import { GeolocationService } from '../services/geolocation.service';

@Component({
  providers:[
    Geofence
  ],
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.scss'],
})
export class GeolocationComponent implements OnInit, DoCheck {

  data: GeofenceInterface;
  myPosition: coords;
  layers;
  layersControl;
  options: MapOptions;
  map: boolean;
  center;
  index: number;
  edit: boolean;
  
  constructor(
    private router: Router,
    private store: Store<AppState>,
    private geofence: Geofence,
    private platform: Platform,
    private geo: GeolocationService
    ) {
          // initialize the plugin
          this.geofence.initialize().then(
            // resolved promise does not return a value
            () => console.log('Geofence Plugin Ready'),
            (err) => console.log(err)
          )
     }

  async ngOnInit() {
    this.map = false;
    this.myPosition = {
      accuracy: 0,
      latitude: 0,
      longitude: 0
    };

    this.options = {
      layers: [
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
      ],
      zoom: null,
      center: null
    };

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
            id: Math.floor(Math.random()*1000),
            text: '',
            openAppOnClick: true,
            title: document.title
          },
          radius: 1000,
          transitionType: 1
        };
      }
    });

    await this.store.select('Position').subscribe(coords => {
      this.myPosition.latitude = coords.latitude;
      this.myPosition.longitude = coords.longitude;
      this.myPosition.accuracy = coords.accuracy;
    });

    if (this.edit) {
      this.options.center = latLng(this.data.latitude, this.data.longitude);
      this.options.zoom = 8;  
    }else {
      // Center the current position
      this.options.center = latLng(this.myPosition.latitude, this.myPosition.longitude);
      this.options.zoom = 13;
    }

    // leaflet options
    //this.options

    //add layers control
    //this.addLayersControl();

    // set the radius and the market position


    // delay map view
    setTimeout(() => {
      this.map = true;
      this.setLayers();
    }, 1000);
  }

  ngDoCheck(){

  }

  addLayersControl(): void{
    this.layersControl = {
      baseLayers: {
          'Open Street Map': tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
          //'Open Cycle Map': tileLayer('http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
      },
      overlays: {
          //'See Position': circle([this.data.latitude, this.data.longitude], { radius: this.data.radius }),
          'See my position'  : marker([this.myPosition.latitude, this.myPosition.longitude], {
            autoPan: true,
          })
      }
    }
  }

  // refresh the market and circle
  setLayers(): void{

    this.layers = [
      circle([this.data.latitude, this.data.longitude], { radius: this.data.radius }),
      //marker([this.data.latitude, this.data.longitude]),
      marker([this.myPosition.latitude, this.myPosition.longitude], {
        autoPan: true,
        icon: icon({
          iconSize: [ 18, 18 ],
          //iconAnchor: [ 0, 0 ],
          iconUrl: 'assets/marker.png',
          //shadowUrl: 'assets/marker-shadow.png'
       })
      }), circle([this.myPosition.latitude, this.myPosition.longitude], { radius: this.myPosition.accuracy})
      .setStyle({
        fillColor: '#f21818',
        color: '#f21818'
      })
    ];
  }

  //set new position
  onSetMarket(evt): void{
    if(!this.edit){
      this.data.latitude = evt.latlng.lat;
      this.data.longitude = evt.latlng.lng
      this.center = evt.latLng
      this.setLayers();
    }
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
    if(this.platform.is('hybrid')){
      this.addGeofence();
    }
    if(this.edit){ 
      this.store.dispatch(Actions.patchFence({fence: this.data, index: this.index}))
    } else{ 
      this.data.id = this.getID();
      this.store.dispatch(Actions.addFence(this.data));
    }
    //this.store.dispatch(Actions.initialFence())
    this.router.navigate(['/app/fences']);
  }

  private addGeofence() {
    //options describing geofence
    this.geofence.addOrUpdate(this.data).then(
       () => console.log('Geofence added'),
       (err) => console.log('Geofence failed to add')
     );
  }

}
