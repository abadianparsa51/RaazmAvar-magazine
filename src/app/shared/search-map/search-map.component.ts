import { Component, OnInit } from "@angular/core";
import { icon, latLng, marker, tileLayer } from "leaflet";
import { ObserverService } from 'src/app/core/observer.service';
import { CoachListService } from 'src/app/services/coach-list.service';
import { GymListService } from 'src/app/services/gym-list.service';


@Component({
  selector: "app-search-map",
  templateUrl: "./search-map.component.html",
  styleUrls: ["./search-map.component.scss"]
})
export class SearchMapComponent implements OnInit {
  location: any;
  openMapVal = false;
  openMapPopup: boolean = false;
  LAYER_OSM = tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 20
  });
  options = {
    layers: [this.LAYER_OSM],
    zoom: 15,
    center: latLng(35.741731, 51.41587)
  };
  markers: any[] = [];
  constructor(private observer: ObserverService) { }

  checkCoach() {
    if (location.pathname.includes('/coach-list')) {
      this.addMarkerCoach(CoachListService.locations, CoachListService.titles);
      return true;
    } else {
      return false;
    }
  }

  checkAddCoach() {
    if (location.pathname.includes('/profile/addcoach')) {
      return true;
    } else {
      return false;
    }
  }

  checkGym() {
    if (location.pathname.includes('/gymlist')) {
      this.addMarkerGym(GymListService.locations, GymListService.titles);
      return true;
    } else {
      return false;
    }
  }

  checkAddGym() {
    if (location.pathname.includes('/profile/addgym')) {
      return true;
    } else {
      return false;
    }
  }

  addMarker(e) {
    const newMarker = marker(e.latlng, {
      icon: icon({
        iconSize: [50, 50],
        iconAnchor: [25, 50],
        iconUrl: "assets/image/maps-and-flags.svg"
      })
    });
    this.markers[0] = newMarker;
    this.location = newMarker.getLatLng();
    // console.log(this.location);
    this.observer.setCurrentLocation(this.location);
  }

  removeMarker() {
    this.markers.pop();
  }


  addMarkerCoach(coachlocation: any[], coachtitle: any[]) {
    for (let index = 0; index < coachlocation.length; index++) {
      const newMarker = marker(coachlocation[index], {
        icon: icon({
          iconSize: [50, 50],
          iconAnchor: [25, 50],
          iconUrl: "assets/image/maps-and-flags.svg"
        })
      });
      this.markers[index] = newMarker;
      this.location = newMarker.getLatLng();
      this.observer.setCurrentLocation(this.location);
      this.markers[index].bindPopup(coachtitle[index]).openPopup(this.location);
    }
  }

  addMarkerGym(gymlocation: any[], gymtitle: any[]) {
    for (let index = 0; index < gymlocation.length; index++) {
      // const message = popup().setContent("it's ok!");
      const newMarker = marker(gymlocation[index], {
        icon: icon({
          iconSize: [50, 50],
          iconAnchor: [25, 50],
          iconUrl: "assets/image/maps-and-flags.svg"
        })
      }).setLatLng(gymlocation[index]);
      this.markers[index] = newMarker;
      this.location = newMarker.getLatLng();
      this.observer.setCurrentLocation(this.location);
      this.markers[index].bindPopup(gymtitle[index]).openPopup(this.location);
    }
  }


  ngOnInit() {
  }

  openMap() {
    this.openMapVal = !this.openMapVal;
  }
}
