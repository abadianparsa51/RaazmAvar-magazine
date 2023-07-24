import {Component, HostListener, OnInit} from '@angular/core';
import { VideosService } from '../services/videos.service';

@Component({
  selector: 'app-offline-videoslist',
  templateUrl: './offline-videoslist.page.html',
  styleUrls: ['./offline-videoslist.page.scss']
})
export class OfflineVideoslistPage implements OnInit {
  newsStore: any = [];
  firstStore: any = [];
  page = 1;
  category: any = 0;
  requestMaker = true;
  categories: any;
  filterVal: string;

  constructor(private getdata: VideosService) { }
  @HostListener('window:scroll', ['$event'])
  onScroll(ele) {
    if ((ele.target.scrollingElement.scrollHeight - 1200) < ele.target.scrollingElement.scrollTop) {
      if (this.requestMaker) {
        this.page = this.page + 1;
        this.requestPage(this.page, this.category);
      }
    }
  }

  requestPage(page, category) {
    this.requestMaker = false;
    this.getdata.getvideos(page, category).subscribe(data => {
      this.firstStore = data;
      for (const item of this.firstStore) {
        this.newsStore.push(item);
      }
      setTimeout(() => {
        this.requestMaker = true;
      }, 500);
    });
  }

  selectCat(cat) {
    this.category = cat;
    console.log(cat);
    this.newsStore = [];
    this.page = 1;
    this.requestPage(this.page, this.category);
  }

  ngOnInit() {
    this.getdata.getcategories(1).subscribe(data => {
      this.categories = data;
    });
    this.requestPage(this.page, this.category);
  }

  checked(p: string) {
    this.filterVal = p;
  }
}
