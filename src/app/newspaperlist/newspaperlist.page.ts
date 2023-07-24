import {NewspaperlistService} from './../services/newspaperlist.service';
import {Component, HostListener, NgModule, OnInit, ViewChild} from '@angular/core';
import {PinchZoomModule} from 'ngx-pinch-zoom';
import {Slides} from 'ionic-angular';
import {Meta} from '@angular/platform-browser';


@Component({
    selector: 'app-newspaperlist',
    templateUrl: './newspaperlist.page.html',
    styleUrls: ['./newspaperlist.page.scss']
})
export class NewspaperlistPage implements OnInit {
    openMapVal = false;
    newspaperlist: any = [];
    liker: any = false;
    pdfDatas;
    pages: any[] = [];
    pageYouAreOn;
    totalPage: number;
    slideOptsOne = {
        initialSlide: 0,
        slidesPerView: 1,
        pager: false
    };
    firstStore: any = [];
    page = 1;
    category: any = 2;
    requestMaker = true;
    timer: any = 0;
    fullSizeShow: any = false;
    fullSizeUrl: any = 'https://mobile.khabarrazmavar.ir/files/magazine/1567950494/261razmavar1.jpg';
    zoomWidth: any = 'auto';
    zoomHeight: any = 'auto';

    constructor(private getdata: NewspaperlistService, private meta: Meta) {
    }

    @ViewChild('nespaperSlide') slides: Slides;

    @HostListener('window:scroll', ['$event'])
    onScroll(ele) {
        if ((ele.target.scrollingElement.scrollHeight - 1200) < ele.target.scrollingElement.scrollTop) {
            if (this.requestMaker) {
                this.page = this.page + 1;
                this.requestPage(this.page);
            }
        }
    }

    doubleClick(e) {
        e.stopPropagation();
        e.preventDefault();
        /*const calc = Date.now() - this.timer;
        if (calc < 700) {
            this.fullSizeUrl = url;
            if (this.fullSizeShow) {
                this.fullSizeShow = false;
            } else {
                this.fullSizeShow = true;
            }
            this.timer = 0;
        } else {
            this.timer = Date.now();
        }*/
    }

    stopSwipe(e) {
        console.log(e);
        this.slides.lockSwipes(true);
    }

    zoomRight(e) {
        console.log(e.target);
    }

    zoomer(e) {
        if (e.scale > 1) {
            this.slides.lockSwipes(true);
        } else {
            console.log('yess');
            this.slides.lockSwipes(false);
        }
    }

    requestPage(page) {
        this.requestMaker = false;
        this.getdata.getnewspaperlistInfo(page).subscribe(data => {
            this.firstStore = data;
            for (const item of this.firstStore) {
                this.newspaperlist.push(item);
            }
            setTimeout(() => {
                this.requestMaker = true;
            }, 500);
        });
    }

    likeVideo() {
        this.liker = true;
    }

    openPDF(dataIndex: string, price) {
        if (price < 1) {
            /*this.meta.addTags([
                {name: 'viewport', content: 'viewport-fit=cover, width=device-width'}
            ]);*/
            this.openMapVal = !this.openMapVal;
            this.getdata.getnewspaperDetailsInfo(dataIndex).subscribe(data => {
                let getPages = data['PDFs'];
                this.pages = getPages.flatMap(k => k['page']);
                this.totalPage = this.pages.length;
                this.pdfDatas = data;
            });
        }
    }

    closePDF() {
        this.meta.addTags([
            // tslint:disable-next-line:max-line-length
            {
                name: 'viewport',
                content: 'viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no'
            }
        ]);
        this.openMapVal = !this.openMapVal;
        this.pdfDatas = null;
    }

    onSelectPage(value) {
        this.slides.slideTo(value, 500);
    }

    payment(url) {
        window.open(url, '_system', 'location=yes');
    }

    ngOnInit() {
        this.requestPage(this.page);
    }
}
