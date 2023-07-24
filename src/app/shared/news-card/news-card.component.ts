import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {
  @Input() data: any;
  @Input() index: number;
  showSubtitel: boolean = true
  constructor(private router: Router) { }
  video(i: string) {
    return i;
  }
  ngOnInit() {
    if (this.router.url === '/offline-videoslist') {
      this.video('23rem');
      this.showSubtitel = false;
    } else {
      this.video('13rem');
    }
  }
}
