import { Component, OnInit } from '@angular/core';
import {FavesService} from './../../services/faves.service';
import {ArticleService} from '../../services/article.service';
import {VideosService} from '../../services/videos.service';

@Component({
  selector: 'app-fave',
  templateUrl: './fave.page.html',
  styleUrls: ['./fave.page.scss'],
})
export class FavePage implements OnInit {

  favorites: any = [];

  constructor(private faves: FavesService) { }

  ngOnInit() {
    this.faves.getFaves().subscribe(data => {
      this.favorites = data;
    });
  }

}
