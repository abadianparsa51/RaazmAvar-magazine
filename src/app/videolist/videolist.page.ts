import {Component, OnInit} from '@angular/core';
import {LiveService} from './../services/live.service';
import {GymListService} from '../services/gym-list.service';

@Component({
    selector: 'app-videolist',
    templateUrl: './videolist.page.html',
    styleUrls: ['./videolist.page.scss']
})
export class VideolistPage implements OnInit {
    filterVal: string;

    videosStore: any = [];
    categories: any;

    constructor(private getdata: LiveService) {
    }

    onScroll(ele) {
        if ((ele.path[0].scrollHeight - 1200) < ele.path[0].scrollTop) {

        }
    }

    ngOnInit() {
        this.getdata.getvideos().subscribe(data => {
            this.videosStore = data;
        });
        this.getdata.getcategories(2).subscribe(data => {
            this.categories = data;
        });
    }

    checked(p: string) {
        this.filterVal = p;
    }
}
