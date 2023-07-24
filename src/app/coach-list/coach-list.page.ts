import { CoachListService } from './../services/coach-list.service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-coach-list',
  templateUrl: './coach-list.page.html',
  styleUrls: ['./coach-list.page.scss']
})
export class CoachListPage implements OnInit {
  // locations: any[] = [];

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
  categories: any;
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
      for (let index = 0; index < this.datas.CoachList.popularStore.length; index++) {
        CoachListService.locations[index] = this.datas.CoachList.popularStore[index].location;
        CoachListService.titles[index] = this.datas.CoachList.popularStore[index].title;
      }
    });
    this.getdata.getcategories(1).subscribe(data => {
      this.categories = data;
    });
  }
  checked(p: string) {
    this.filterVal = p;
  }
}
