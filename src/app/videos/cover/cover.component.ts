import {Component, OnInit, Input} from '@angular/core';
import {VideosService} from './../../services/videos.service';

@Component({
    selector: 'app-video-cover',
    templateUrl: './cover.component.html',
    styleUrls: ['./cover.component.scss']
})
export class CoverComponent implements OnInit {
    @Input() data: any;
    liker: any = false;

    constructor(private videos: VideosService) {
    }

    likeVideo(section) {
        if (this.liker) {
            this.videos.likeVideo(section).subscribe(data => {

            });
            this.liker = false;
        } else {
            this.videos.likeVideo(section).subscribe(data => {

            });
            this.liker = true;
        }
    }

    ngOnInit() {
        this.videos.videoLikeStatus(this.data.id).subscribe(data => {
            if (data['message'] === 1) {
                this.liker = true;
            } else {
                this.liker = false;
            }
        });
    }
}
