import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from '../services/store.service';
import { GeofenceInterface } from '../models/geofence.interface';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {

  fences: GeofenceInterface[]=[];

  constructor(private store: StoreService) { }

  ngOnInit() {
    this.store.restore();
    this.fences = this.store.getItems();
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
}
