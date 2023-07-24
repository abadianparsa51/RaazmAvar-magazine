import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ObserverService {
  currentLocation = new BehaviorSubject<any>([]);
  constructor() { }
  setCurrentLocation(location: any[]) {
    this.currentLocation.next(location);
  }
}
