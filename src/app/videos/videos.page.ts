import {ArticleService} from './../services/article.service';
import {VideosService} from './../services/videos.service';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-videos',
    templateUrl: './videos.page.html',
    styleUrls: ['./videos.page.scss']
})
export class VideosPage implements OnInit {
    data: any;
    lastStore: any[];
    articleData: any;

    constructor(private route: ActivatedRoute, private article: ArticleService, private videos: VideosService) {
    }

    onScroll(ele) {
        if ((ele.path[0].scrollHeight - 1200) < ele.path[0].scrollTop) {

        }
    }

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        this.article.getVideosInfo(id).subscribe(data => {
            this.articleData = data;
        });
    }
}
