import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username;
  password;
  loading = true;
  constructor(
    private route: Router,
    private login: AuthService,
    public toastController: ToastController
  ) {}

  ngOnInit() {}
  checkUser() {
    this.loading = this.loading === true ? false : true;
    this.login
      .login(this.username, this.password)
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
          localStorage.setItem('user-Key', data.message.key);
          this.login.checkAgain();
          this.route.navigateByUrl('/profile');
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
  }
  getUsername(userNameValue: string) {
    this.username = userNameValue;
  }
  getPassword(passWordValue: string) {
    this.password = passWordValue;
  }
}
export interface IDataObj {
  code?: string;
  message?: { message: string; key: string };
  resualt?: string;
}
