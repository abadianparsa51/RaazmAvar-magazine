import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GymlistPage } from './gymlist.page';
import { SearchModule } from '../shared/search/search.module';
import { SliderModule } from '../shared/slider/slider.module';
import { SearchMapModule } from '../shared/search-map/search-map.module';
import { PopularCardModule } from '../shared/popular-card/popular-card.module';
import {CategoryCardModule} from '../shared/category-card/category-card.module';

const routes: Routes = [
  {
    path: '',
    component: GymlistPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SearchModule,
        SliderModule,
        SearchMapModule,
        PopularCardModule,
        RouterModule.forChild(routes),
        CategoryCardModule
    ],
  declarations: [GymlistPage]
})
export class GymlistPageModule {}
