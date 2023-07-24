import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { VideolistPage } from './videolist.page';
import { CategoryCardModule } from '../shared/category-card/category-card.module';
import { SearchModule } from '../shared/search/search.module';
import { VideoCardModule } from '../shared/video-card/video-card.module';

const routes: Routes = [
  {
    path: '',
    component: VideolistPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryCardModule,
    SearchModule,
    VideoCardModule,
    Ng2SearchPipeModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VideolistPage]
})
export class VideolistPageModule {}
