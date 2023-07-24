import { CoachInfoService } from './../services/coach-info.service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ButtonsModule } from './../shared/buttons/buttons.module';
import { tileLayer, latLng, marker, icon } from 'leaflet';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-shop-final',
  templateUrl: './shop-final.page.html',
  styleUrls: ['./shop-final.page.scss'],
})
export class ShopFinalPage implements OnInit {

  newsStore: any;
  page: number = 1;
  options = [
    { value: '2', viewValue: 'استان' },
    { value: '162', viewValue: 'تهران' },
    { value: '7', viewValue: 'ورزش های رزمی' },
    { value: '20', viewValue: 'تکواندو' },
    { value: '18', viewValue: 'کاراته' },
    { value: '21', viewValue: 'جودو' },
    { value: '13', viewValue: 'بوکس' },
    { value: '19', viewValue: 'ووشو' },
    { value: '36', viewValue: 'کونگ فو' }
  ];
  array = [];

  addToCartTitleBtnName = 'اضافه کردن به سبد خرید ';
  addToCartCustomClass = 'btn3 btn3_green';
  addToCartURLLink = 'shop-products';
  addToCartbtnIcon = 'icon-sort-button-with-three-lines';


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
