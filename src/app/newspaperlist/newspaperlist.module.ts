import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { IonicModule } from '@ionic/angular';

import { NewspaperlistPage } from './newspaperlist.page';
import { SearchModule } from '../shared/search/search.module';
import { PopularCardModule } from '../shared/popular-card/popular-card.module';
import {PinchZoomModule} from 'ngx-pinch-zoom';

const routes: Routes = [
  {
    path: '',
    component: NewspaperlistPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PopularCardModule,
        SearchModule,
        RouterModule.forChild(routes),
        IonicModule,
        IonicModule,
        PinchZoomModule
    ],
  declarations: [NewspaperlistPage, JwPaginationComponent]
})
export class NewspaperlistPageModule { }
