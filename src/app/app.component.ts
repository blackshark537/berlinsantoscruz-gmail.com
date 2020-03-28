import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { StoreService } from './services/store.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Add Fixture',
      url: '/folder/Inbox',
      icon: 'add'     
    },
    {
      title: 'Remove All Geonfences',
      url: '/folder/Outbox',
      icon: 'trash'
    },
    {
      title: 'Test Application',
      url: '/folder/Favorites',
      icon: 'checkmark'
    },
    {
      title: 'Source',
      url: '/folder/Archived',
      icon: 'code'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private store: StoreService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  action(index){
    switch(index){
      case 0:
        this.restoreAll();
        break;
      case 1:
        this.removeAll();
        break;
      case 2:
        this.removeAll();
        break;
      case 3:
        window.open('https://github.com/blackshark537/geofence').focus();
        break;
      default:
        break;
    }
  }

  removeAll(){
    //this.store.deleteAll();
    console.log('removeAll');
  }

  restoreAll(){
    //this.store.restore();
    console.log('addAll');
  }
}
