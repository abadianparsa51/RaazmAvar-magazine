import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit {
  verificationCode: string;
  data;
  mobileVal: string;
  loading = true;
  constructor(
    private route: Router,
    private activated: ActivatedRoute,
    private auth: AuthService,
    public toastController: ToastController
  ) {}

  ngOnInit() {
    this.activated.queryParams.subscribe(params => {
      this.mobileVal = params.phone;
    });
  }
  getVerificationCode(userNameValue: string) {
    this.verificationCode = userNameValue;
  }
  checkVerificationCode() {
    this.auth
      .verification(this.mobileVal, Number(this.verificationCode))
      .subscribe(res => {
        this.data = res;
        if(res['result']){
          this.toastController.create({
            message: res['message'],
            color: 'success',
            position: 'bottom',
            duration: 4000
          }).then(toast => {
            toast.present();
          });
          this.route.navigateByUrl('profile');
        }else {
          this.toastController.create({
            message: res['message'],
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
}
export interface IDataObj {
  code?: string;
  message?: { message: string };
  resualt?: string;
}
