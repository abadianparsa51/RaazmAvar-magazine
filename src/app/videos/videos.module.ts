import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VideosPage } from './videos.page';
import { LastCardModule } from '../shared/last-card/last-card.module';
import { ParagraphModule } from '../shared/paragraph/paragraph.module';
import { ImageModule } from '../shared/image/image.module';
import { CoverComponent } from './cover/cover.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  {
    path: '',
    component: VideosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    LastCardModule,
    ParagraphModule,
    ImageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VideosPage, CoverComponent, VideoComponent]
})
export class VideosPageModule {}
