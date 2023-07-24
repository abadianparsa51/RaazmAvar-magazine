import { LastCardModule } from './../shared/last-card/last-card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { ArticleCardModule } from '../shared/article-card/article-card.module';
import { SliderModule } from '../shared/slider/slider.module';
import { SearchModule } from '../shared/search/search.module';
import { PopularCardModule } from '../shared/popular-card/popular-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LastCardModule,
    SliderModule,
    SearchModule,
    ArticleCardModule,
    PopularCardModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
