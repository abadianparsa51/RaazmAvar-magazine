import { SearchModule } from './../shared/search/search.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OfflineVideoslistPage } from './offline-videoslist.page';
import { NewsCardModule } from '../shared/news-card/news-card.module';
import {CategoryCardModule} from '../shared/category-card/category-card.module';

const routes: Routes = [
  {
    path: '',
    component: OfflineVideoslistPage
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
        CategoryCardModule
    ],
  declarations: [OfflineVideoslistPage]
})
export class OfflineVideoslistPageModule {}
