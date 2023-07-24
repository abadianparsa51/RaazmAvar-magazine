import { ButtonModule } from './../shared/button/button.module';
import { InputModule } from './../shared/input/input.module';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AuthenticationPage } from './authentication.page';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { VerificationComponent } from './verification/verification.component';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationPage,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'forgetpassword', component: ForgetpassComponent },
      { path: 'verification', component: VerificationComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputModule,
    ButtonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AuthenticationPage,
    LoginComponent,
    SignupComponent,
    ForgetpassComponent,
    VerificationComponent
  ]
})
export class AuthenticationPageModule {}
