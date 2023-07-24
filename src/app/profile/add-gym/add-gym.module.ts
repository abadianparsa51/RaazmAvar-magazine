import { InputModule } from './../../shared/input/input.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddGymPage } from './add-gym.page';
import { SearchMapModule } from '../../shared/search-map/search-map.module';

const routes: Routes = [
  {
    path: '',
    component: AddGymPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    InputModule,
    SearchMapModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddGymPage]
})
export class AddGymPageModule {}
