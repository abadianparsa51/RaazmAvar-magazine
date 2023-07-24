import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfilePage } from './profile.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  },
  {
    path: 'addgym',
    loadChildren: './add-gym/add-gym.module#AddGymPageModule'
  },
  {
    path: 'addcoach',
    loadChildren: './add-coach/add-coach.module#AddCoachPageModule'
  },
  {
    path: 'fave',
    loadChildren: './fave/fave.module#FavePageModule'
  },
  {
    path: 'messages',
    loadChildren: './messages/messages.module#MessagesPageModule'
  },
  {
    path: 'edit',
    loadChildren: './edit/edit.module#EditPageModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
