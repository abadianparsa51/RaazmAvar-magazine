import { InputModule } from './../../shared/input/input.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddCoachPage } from './add-coach.page';
import { SearchMapModule } from '../../shared/search-map/search-map.module';
const routes: Routes = [
  {
    path: '',
    component: AddCoachPage
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
  declarations: [AddCoachPage]
})
export class AddCoachPageModule {}
