import { GymInfoService } from './../services/gym-info.service';
import { Component, OnInit } from '@angular/core';
import { tileLayer, latLng, marker, icon} from 'leaflet';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gympage',
  templateUrl: './gympage.page.html',
  styleUrls: ['./gympage.page.scss']
})
export class GympagePage implements OnInit {
  location: any[];

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 20
      })
    ],
    zoom: 15,
    center: latLng(35.741731, 51.41587)
  };
  layers = [];
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
    loop: true,
    pager: true
  };
  datas;
  constructor(
    private route: ActivatedRoute, 
    private getdata: GymInfoService
  ) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');
    this.getdata.getGymInfo(id).subscribe(data => {
      // this.location = data['GymsList']['coachDetails']['location'];
      this.datas = data;
      console.log(data);
      this.options.center = this.datas.GymsList.coachDetails.location;
      this.layers[0] = marker(this.datas.GymsList.coachDetails.location, {
        icon: icon({
          iconUrl: 'assets/image/maps-and-flags.svg',
          iconSize: [50, 50],
          iconAnchor: [25, 50]
        })
      });
    });
  }
}
