import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LivePage } from './live.page';
import { LastCardModule } from '../shared/last-card/last-card.module';
import { ParagraphModule } from '../shared/paragraph/paragraph.module';
import { ImageModule } from '../shared/image/image.module';
import { CoverComponent } from './cover/cover.component';
import {SharedModule} from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: LivePage
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
        RouterModule.forChild(routes),
        SharedModule
    ],
  declarations: [LivePage, CoverComponent]
})
export class LivePageModule {}
