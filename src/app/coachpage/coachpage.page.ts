import { CoachInfoService } from './../services/coach-info.service';
import { Component, OnInit, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ButtonsModule } from './../shared/buttons/buttons.module';
import { tileLayer, latLng, marker, icon } from 'leaflet';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coachpage',
  templateUrl: './coachpage.page.html',
  styleUrls: ['./coachpage.page.scss']
})
export class CoachpagePage implements OnInit {
  location: any[];
  addToCartTitleBtnName = 'اضافه کردن به سبد خرید ';
  addToCartCustomClass = 'btn3 btn3_green';
  addToCartURLLink = 'shop-products';
  addToCartbtnIcon = 'icon-sort-button-with-three-lines';

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
    private getdata: CoachInfoService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getdata.getTrainerInfo(id).subscribe(data => {
      this.datas = data;
      this.options.center = this.datas.CoachList.coachDetails.location;
      this.layers[0] = marker(this.datas.CoachList.coachDetails.location, {
        icon: icon({
          iconUrl: 'assets/image/maps-and-flags.svg',
          iconSize: [50, 50],
          iconAnchor: [25, 50]
        })
      });
    });
  }
}
