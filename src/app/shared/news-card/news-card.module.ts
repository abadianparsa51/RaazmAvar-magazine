import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsCardComponent } from './news-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NewsCardComponent],
  exports: [NewsCardComponent],
  imports: [CommonModule, RouterModule]
})
export class NewsCardModule {}
