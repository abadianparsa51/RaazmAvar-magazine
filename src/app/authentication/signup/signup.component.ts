import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  mobile: string;
  fullname: string;
  password: string;
  gender: number;
  confirmPassword: string;
  loading: boolean;
  constructor(
    private signup: AuthService,
    private route: Router,
    public toastController: ToastController
  ) {}

  ngOnInit() {}
  signUpUser() {
    this.loading = this.loading === true ? false : true;
    this.signup
      .signup(this.fullname, this.mobile, this.password, this.gender)
      .subscribe((data: IDataObj) => {
        if (data.code === '1') {
          this.loading = this.loading === true ? false : true;
          this.toastController
            .create({
              message: data.message.message,
              color: 'success',
              position: 'bottom',
              duration: 4000
            })
            .then(toast => {
              toast.present();
            });
          this.route.navigate(['/authentication/verification'], {
            queryParams: { phone: this.mobile }
          });
        }
        if (data.code === '0') {
          this.loading = this.loading === false ? true : false;
          this.toastController
            .create({
              message: data.message.message,
              color: 'danger',
              position: 'bottom',
              duration: 4000
            })
            .then(toast => {
              toast.present();
            });
        }
      });
    /*     */
  }
  setGender(p: number) {
    this.gender = p;
  }
  getMobile(userNameValue: string) {
    this.mobile = userNameValue;
  }
  getFullname(passWordValue: string) {
    this.fullname = passWordValue;
  }
  getPassword(userNameValue: string) {
    this.password = userNameValue;
  }
  getConfirmPassword(passWordValue: string) {
    this.confirmPassword = passWordValue;
  }
}
export interface IDataObj {
  code?: string;
  message?: { message: string };
  resualt?: string;
}
