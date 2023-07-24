import { CoachListService } from './../services/coach-list.service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {

  bestSellersTitleBtnName = ' پرفروش ترین ها ';
  bestSellersCustomClass = 'btn2 btn2_silver';
  // bestSellersURLLink = 'shop-products';
  // editProfilebtnIcon = 'icon-avatar';

  newestTitleBtnName = ' جدید ترین ها ';
  newestCustomClass = 'btn2 btn2_silver';
  // editProfileURLLink = 'editInfo';
  // editProfilebtnIcon = 'icon-avatar';

  mostViewedTitleBtnName = ' پر بازدیدترین ها ';
  mostViewedCustomClass = 'btn2 btn2_silver';
  // editProfileURLLink = 'editInfo';
  // editProfilebtnIcon = 'icon-avatar';

  customOptions: OwlOptions = {
    rtl: true,
    loop: true,
    margin: 10,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    freeDrag: true,
    autoplay: true,
    dots: true,
    navSpeed: 300,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 2
      }
    },
    nav: false
  };
  datas;
  filterVal: string;
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
    loop: true,
    pager: true
  };
  constructor(private getdata: CoachListService) { }

  ngOnInit() {
    this.getdata.getCoachlist().subscribe(data => {
      this.datas = data;
    });
  }
  checked(p: string) {
    this.filterVal = p;
  }
}
