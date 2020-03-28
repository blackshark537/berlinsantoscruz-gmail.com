import { Component, OnInit } from '@angular/core';
import { tileLayer, latLng, circle, marker } from 'leaflet';
import { GeofenceInterface } from '../models/geofence.interface';
import { GeolocationService } from '../services/geolocation.service';
import { StoreService } from '../services/store.service';
import { Router, ActivatedRoute } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.scss'],
})
export class GeolocationComponent implements OnInit {

  data: GeofenceInterface = {
    id: "1",
    latitude: 0,
    longitude: 0,
    radius: 1000,
    transitionType: 1,
    notification: {
      text: ""
    }
  };

  layers;
  options;
  map: boolean;
  center;
  index: number;
  
  constructor(
    private geo: GeolocationService,
    private store: StoreService,
    private activeRoute: ActivatedRoute,
    private router: Router
    ) { }

  async ngOnInit() {

    this.index =  parseInt(this.activeRoute.snapshot.paramMap.get('id'));

    if (this.index) {
      const item = this.store.getOne(this.index);
      this.data = item;
    } else {
      // get the current position
      await this.geo.getLocation().then(resp => {
        this.data.latitude = resp.coords.latitude;
        this.data.longitude = resp.coords.longitude;
      }).catch(error => alert(error.message));
    }

    // leaflet options
    this.options = {
      layers: [
        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
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

  //save the geofence
  save(): void{
    if(this.index){
      this.store.patchOne(this.data, this.index);
      this.router.navigate(['']);
    } else {
      this.store.setOne(this.data);
      this.router.navigate(['']);
    }
  }

}
