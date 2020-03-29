import { Component, OnInit } from '@angular/core';
import { GeofenceInterface } from '../models/geofence.interface';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../models/app.state';
import * as actions from '../actions/state.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {

  fences$: Observable<GeofenceInterface[]>;

  constructor( 
    private store: Store<AppState>,
    private router: Router
  ) { }

  async ngOnInit() {
    this.fences$ = this.store.select('Fences');
    this.store.select('Position').subscribe(coords => {
      this.fences$.subscribe(fences =>{
        fences.map(val =>{
          let lat1 = coords.latitude;
          let lat2 = val.latitude;
          let lon1 = coords.longitude;
          let lon2 = val.longitude;
         // if(d<= val.radius) 
	  console.log('calculate the distance: ', this.distance(lat1,lon1,lat2,lon2), val.radius* 0.001);
        });
      });
    });
  }

distance(lat1,lon1,lat2,lon2) {
	let R = 6371; // km (change this constant to get miles)
	let dLat = (lat2-lat1) * Math.PI / 180;
	let dLon = (lon2-lon1) * Math.PI / 180;
	let a = Math.sin(dLat/2) * Math.sin(dLat/2) +
		Math.cos(lat1 * Math.PI / 180 ) * Math.cos(lat2 * Math.PI / 180 ) *
		Math.sin(dLon/2) * Math.sin(dLon/2);
	let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
	let d = R * c;
	if (d>1) return Math.round(d);
	else if (d<=1) return Math.round(d*1000);
	return d;
}

  getTransition(transition: number): string{
    switch(transition){
      case 1:
        return 'entering region';
      case 2:
        return 'exiting region';
      case 3:
        return 'entering or exiting region';
    }
  }

  newOne(){
   this.store.dispatch(actions.newfence({edit: false}));
   this.goToGeo();
  }

  editOne(fence, index){
    this.store.dispatch(actions.editfence({edit: true, index, fence}));
    this.goToGeo();
  }

  goToGeo(){
    this.router.navigate(['app/geolocation']);
  }
}
