import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';
import { GeolocationComponent } from '../geolocation/geolocation.component';

const routes: Routes = [
  {
    path: '',
    component: FolderPage
  },
  {
    path: 'geolocation',
    component: GeolocationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
