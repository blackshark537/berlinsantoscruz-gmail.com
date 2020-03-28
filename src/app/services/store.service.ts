import { Injectable } from '@angular/core';
import { GeofenceInterface } from '../models/geofence.interface';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  public store: GeofenceInterface[] = [{id: "1", latitude: 50.3021079, longitude: 18.6771861, radius: 3000, transitionType: 1, notification: {text: 'Gliwice Train Station'}},
  {id: "2", latitude: 50.4728049, longitude: 19.0736874, radius: 3000, transitionType: 1, notification: {text: 'Pyrzowice Airport'}},
  {id: "3", latitude: 50.0671974, longitude: 19.945232, radius: 3000, transitionType: 1, notification: {text: 'Cracow Main Station'}},
  {id: "4", latitude: 52.2287803, longitude: 21.001124, radius: 3000, transitionType: 1, notification: {text: 'Warsaw Main Station'}},
  {id: "5", latitude: 40.7257093, longitude: -74.0032786, radius: 4000, transitionType: 3, notification: {text: 'New York - SOHO'}},
  {id: "6", latitude: 34.0033907, longitude: -118.5069657, radius: 3000, transitionType: 2, notification: {text: 'LA - Santa Monica State Beach'}},
  {id: "7", latitude: 25.8938595, longitude: -80.1330216, radius: 500, transitionType: 1, notification: {text: "Dexter's Apartment - Miami Bay Harbour'"}}];

  constructor() { }

  restore(){
    this.store = [{id: "1", latitude: 50.3021079, longitude: 18.6771861, radius: 3000, transitionType: 1, notification: {text: 'Gliwice Train Station'}},
    {id: "2", latitude: 50.4728049, longitude: 19.0736874, radius: 3000, transitionType: 1, notification: {text: 'Pyrzowice Airport'}},
    {id: "3", latitude: 50.0671974, longitude: 19.945232, radius: 3000, transitionType: 1, notification: {text: 'Cracow Main Station'}},
    {id: "4", latitude: 52.2287803, longitude: 21.001124, radius: 3000, transitionType: 1, notification: {text: 'Warsaw Main Station'}},
    {id: "5", latitude: 40.7257093, longitude: -74.0032786, radius: 4000, transitionType: 3, notification: {text: 'New York - SOHO'}},
    {id: "6", latitude: 34.0033907, longitude: -118.5069657, radius: 3000, transitionType: 2, notification: {text: 'LA - Santa Monica State Beach'}},
    {id: "7", latitude: 25.8938595, longitude: -80.1330216, radius: 500, transitionType: 1, notification: {text: "Dexter's Apartment - Miami Bay Harbour'"}}];
  }
  
  getItems(){
    return this.store
  }

  patchOne(geofence: GeofenceInterface, index: number){
    this.store[index] = geofence;
  }

  setOne(geofence: GeofenceInterface){
    this.store.push(geofence);
  }

  getOne(index: number): GeofenceInterface{
    return this.store[index];
  }

  deleteAll(){
    this.store = [];
  }
}
