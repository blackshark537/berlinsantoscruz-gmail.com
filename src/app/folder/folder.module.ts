import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { FolderPageRoutingModule } from './folder-routing.module';
import { GeolocationComponent } from '../geolocation/geolocation.component';
import { FolderPage } from './folder.page';

@NgModule({
  entryComponents:[
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeafletModule,
    FolderPageRoutingModule
  ],
  declarations: [FolderPage, GeolocationComponent]
})
export class FolderPageModule {}
