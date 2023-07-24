import { CoverSliderModule } from './../shared/cover-slider/cover-slider.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GympagePage } from './gympage.page';
import { SearchModule } from '../shared/search/search.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { PopularCardModule } from '../shared/popular-card/popular-card.module';

const routes: Routes = [
  {
    path: '',
    component: GympagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SearchModule,
    PopularCardModule,
    CoverSliderModule,
    LeafletModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GympagePage]
})
export class GympagePageModule {}
