import { HomeService } from './../services/home.service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { delay, retry } from 'rxjs/operators';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
    loop: true,
    pager: true
  };
  homeData: any;
  slidesStore: any;
  lastStore: any;
  suggestImage1 = 'assets/image/b6.jpg';
  suggestImage2 = 'assets/image/b7.jpg';
  suggestImage3 = 'assets/image/b4.jpg';
  suggestImage4 = 'assets/image/b3.jpg';
  suggestImage5 = 'assets/image/b1.jpg';
  suggestImage6 = 'assets/image/b5.jpg';
  suggestImage7 = 'assets/image/b2.jpg';
  suggestImage8 = 'assets/image/b8.jpg';
  constructor(private home: HomeService) {}
  ngOnInit(): void {
    this.home
      .getHomeInfo()
      .pipe(retry(10))
      .subscribe(data => {
        this.homeData = data;
      });
  }
  /* onScroll(event) {
    console.log(event.path);
  } */
}
