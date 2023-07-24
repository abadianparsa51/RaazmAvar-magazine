import { ImageModule } from './../shared/image/image.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { ArticlePage } from './article.page';

import { CoverComponent } from './cover/cover.component';
import { LastCardModule } from '../shared/last-card/last-card.module';
import { ParagraphModule } from '../shared/paragraph/paragraph.module';

const routes: Routes = [
  {
    path: '',
    component: ArticlePage
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
  declarations: [ArticlePage, CoverComponent]
})
export class ArticlePageModule {}
