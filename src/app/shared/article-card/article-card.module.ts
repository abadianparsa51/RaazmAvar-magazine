import { ArticleCardComponent } from './article-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [ArticleCardComponent],
  exports: [ArticleCardComponent],
  imports: [CommonModule, RouterModule, SharedModule]
})
export class ArticleCardModule {}
