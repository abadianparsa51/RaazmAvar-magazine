import {ArticleService} from './../services/article.service';
import {DomSanitizer} from '@angular/platform-browser';
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-live',
    templateUrl: './live.page.html',
    styleUrls: ['./live.page.scss'],
    encapsulation: ViewEncapsulation.None
})


export class LivePage implements OnInit {
    data: any;
    lastStore: any[];
    videoData: any;

    constructor(private route: ActivatedRoute, private article: ArticleService) {
    }

    onScroll(ele) {
        console.log(ele.path[0].scrollHeight);
        if ((ele.path[0].scrollHeight - 1200) < ele.path[0].scrollTop) {
            console.log('yess');
        }
    }

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        this.article.getLiveInfo(id).subscribe(data => {
            this.videoData = data;
        });
    }
}
