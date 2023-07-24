import { CoachListService } from './../services/coach-list.service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-shop-products',
  templateUrl: './shop-products.page.html',
  styleUrls: ['./shop-products.page.scss'],
})
export class ShopProductsPage implements OnInit {

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
