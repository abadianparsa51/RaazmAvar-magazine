import { NewsCardModule } from './../shared/news-card/news-card.module';
import { SearchModule } from './../shared/search/search.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewslistPage } from './newslist.page';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
// import { ScrollingModule } from '@angular/cdk/scrolling';
import { ScrollingModule } from '@angular/cdk/scrolling';
const routes: Routes = [
  {
    path: '',
    component: NewslistPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchModule,
    NewsCardModule,
    RouterModule.forChild(routes),
    InfiniteScrollModule,
    ScrollingModule
  ],
  declarations: [NewslistPage]
})
export class NewslistPageModule { }
