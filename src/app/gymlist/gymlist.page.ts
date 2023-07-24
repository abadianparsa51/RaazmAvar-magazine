import { GymListService } from './../services/gym-list.service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-gymlist',
  templateUrl: './gymlist.page.html',
  styleUrls: ['./gymlist.page.scss']
})
export class GymlistPage implements OnInit {
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
  constructor(private getdata: GymListService) { }

  ngOnInit() {
    this.getdata.getGymlist().subscribe(data => {
      this.datas = data;
      // console.log(data);

      for (let index = 0; index < this.datas.GymsList.popularStore.length; index++) {
        GymListService.locations[index] = this.datas.GymsList.popularStore[index].location;
        GymListService.titles[index] = this.datas.GymsList.popularStore[index].title;
        // console.log(this.datas.GymsList.popularStore[index].location);
      }
      let i = GymListService.locations.indexOf(false, 0);
      GymListService.locations.splice(i, 1);
      // console.log(GymListService.locations);
      // console.log(GymListService.locations[i]);
      // console.log(GymListService.titles);

    });
    this.getdata.getcategories(4).subscribe(data => {
      this.categories = data;
    });
  }
  checked(p: string) {
    this.filterVal = p;
  }
}
