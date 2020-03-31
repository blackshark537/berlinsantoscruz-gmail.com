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
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
      ],
      zoom: 13,
      center: null
    };

    await this.store.select('Position').subscribe(coords => {
      this.myPosition.latitude = coords.latitude;
      this.myPosition.longitude = coords.longitude;
      this.myPosition.accuracy = coords.accuracy;
      this.options.center = latLng(this.myPosition.latitude, this.myPosition.longitude);
    });

    await this.store.select('Fences').subscribe(fences =>{
      this.layers = [];
      this.setUserLayer();
      fences.map(fence =>{
         this.layers.push(
          circle([fence.latitude, fence.longitude], { radius: fence.radius }).bindPopup(`
            <h6><b>${fence.notification.title}</b></h6>
            <h5>${fence.notification.text}</h5>
          `),
           //marker([fence.latitude, fence.longitude])
          )
      });
    });

    setTimeout(() => {
      this.map = true;
    }, 1000);
  }

  setUserLayer(): void{
    this.layers.push(marker([this.myPosition.latitude, this.myPosition.longitude], {
      autoPan: true,
      icon: icon({
        iconSize: [ 18, 18 ],
        //iconAnchor: [ 10, 10],
        iconUrl: 'assets/marker.png',
        //shadowUrl: 'assets/marker-shadow.png'
     })
    }), circle([this.myPosition.latitude, this.myPosition.longitude], { radius: this.myPosition.accuracy})
    .setStyle({
      fillColor: '#f21818',
      color: '#f21818'
    }).bindPopup("<h5>You are within " + this.myPosition.accuracy + " meters from the red point</h5>").openPopup()
    );
  }
}
