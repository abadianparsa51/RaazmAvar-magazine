import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FavePage } from './fave.page';
import {LastCardModule} from '../../shared/last-card/last-card.module';
import {SearchModule} from '../../shared/search/search.module';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {NewsCardModule} from '../../shared/news-card/news-card.module';

const routes: Routes = [
  {
    path: '',
    component: FavePage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        LastCardModule,
        SearchModule,
        ScrollingModule,
        NewsCardModule
    ],
  declarations: [FavePage]
})
export class FavePageModule {}
