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
          console.log('calculate the distance and compare it with radius');
        });
      });
    });
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
