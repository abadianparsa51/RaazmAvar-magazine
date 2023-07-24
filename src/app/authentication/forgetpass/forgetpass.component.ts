import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.scss']
})
export class ForgetpassComponent implements OnInit {
  usernameVal: string;
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
  getUsername(userNameValue: string) {
    this.usernameVal = userNameValue;
  }
  checkusernameVal() {
    this.auth.recovery(this.mobileVal).subscribe(res => {
      this.data = res;
    });
  }
}
export interface IDataObj {
  code?: string;
  message?: { message: string };
  resualt?: string;
}
