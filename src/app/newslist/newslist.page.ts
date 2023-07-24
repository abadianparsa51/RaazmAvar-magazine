import {NewslistService} from './../services/newslist.service';
import {Component, OnInit, ViewChild, HostListener} from '@angular/core';
import {ObserverService} from './observer.service';
import {IonInfiniteScroll} from '@ionic/angular';

@Component({
    selector: 'app-newslist',
    templateUrl: './newslist.page.html',
    styleUrls: ['./newslist.page.scss']
})
export class NewslistPage implements OnInit {
    isShow: boolean;
    topPosToStartShowing = 100;

    newsStore: any = [];
    firstStore: any = [];
    page = 1;
    category: any = 2;
    requestMaker = true;
    @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
    options = [
        {value: '2', viewValue: 'همه اخبار'},
        {value: '162', viewValue: 'اخبار حرفه ای'},
        {value: '7', viewValue: 'ورزش های رزمی'},
        {value: '20', viewValue: 'تکواندو'},
        {value: '18', viewValue: 'کاراته'},
        {value: '21', viewValue: 'جودو'},
        {value: '13', viewValue: 'بوکس'},
        {value: '19', viewValue: 'ووشو'},
        {value: '36', viewValue: 'کونگ فو'},
        {value: '3', viewValue: 'نقد و تحلیل'},
        {value: '73', viewValue: 'مطالب آموزشی'},
    ];
    array = [];

    constructor(private getdata: NewslistService, private observer: ObserverService) {}

    selectOption(id: string) {
        this.category = id;
        this.observer.setCurrentId(id);
        this.categoryPage(this.page, this.category);
    }

    onScroll(ele) {
        if ((ele.path[0].scrollHeight - 1200) < ele.path[0].scrollTop) {
            if (this.requestMaker) {
                this.page = this.page + 1;
                this.requestPage(this.page, this.category);
            }
        }
    }

    requestPage(page, category) {
        this.requestMaker = false;
        this.getdata.getnewslistInfo(page, category).subscribe(data => {
            this.firstStore = data;
            for (const item of this.firstStore) {
                this.newsStore.push(item);
            }
            setTimeout(() => {
                this.requestMaker = true;
            }, 500);
        });
    }

    categoryPage(page, category) {
        this.requestMaker = false;
        this.getdata.getnewslistInfo(page, category).subscribe(data => {
            this.newsStore = data;
            setTimeout(() => {
                this.requestMaker = true;
            }, 500);
        });
    }

    ngOnInit() {
        this.requestPage(this.page, this.category);
        /*this.observer.onFilterChange.subscribe(
            r => {
                this.getdata.selectCategories(r['page'], r['id']).subscribe(
                    r => {
                        this.newsStore = r;
                    }
                );
            }
        );*/
    }
}
