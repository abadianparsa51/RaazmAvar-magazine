import { CoachInfoService } from './../services/coach-info.service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ButtonsModule } from './../shared/buttons/buttons.module';
import { tileLayer, latLng, marker, icon } from 'leaflet';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop-inside',
  templateUrl: './shop-inside.page.html',
  styleUrls: ['./shop-inside.page.scss'],
})
export class ShopInsidePage implements OnInit {



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
  layers = [
    marker([35.741731, 51.41587], {
      icon: icon({
        iconUrl: 'assets/image/maps-and-flags.svg',
        iconSize: [50, 50]
      })
    })
  ];
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
      console.log(data);
    });
  }
}
