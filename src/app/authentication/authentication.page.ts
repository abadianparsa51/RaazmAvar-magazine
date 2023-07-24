import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.page.html',
  styleUrls: ['./authentication.page.scss']
})
export class AuthenticationPage implements OnInit {
  constructor() {}

  ngOnInit() {}
  isVerification() {
    if (location.pathname.includes('verification')) {
      return false;
    } else {
      return true;
    }
  }
}
