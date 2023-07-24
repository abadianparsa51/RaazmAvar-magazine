import { LocalstorageService } from './../../services/localstorage.service';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { IProfileDataObj } from 'src/app/profile/profile.page';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuFlag = false;
  menuInfo;
  get isLogin(): boolean {
    if (this.auth.isLogin === '0') {
      return false;
    } else {
      return true;
    }
  }
  constructor(
    private auth: AuthService,
    private route: Router,
    private lh: LocalstorageService,
    private profile: ProfileService,
    private _location: Location
  ) { }

  ngOnInit() {
    this.profile.getProfileInfo().subscribe((dataInfo: IProfileDataObj) => {
      this.menuInfo = dataInfo.userProfile;
    });
  }
  checkpage() {
    if (
      location.pathname.includes('/post/display/') ||
      location.pathname.includes('/videos/display/')
    ) {
      return true;
    } else {
      return false;
    }
  }
  checkpagearrow() {
    if (
      location.pathname.includes('/post/display/') ||
      location.pathname.includes('/gym') ||
      location.pathname.includes('/coach') ||
      location.pathname.includes('/trainer/display/') ||
      location.pathname.includes('/profile/addcoach') ||
      location.pathname.includes('/profile/addgym') ||
      location.pathname.includes('/videos/display/') ||
      location.pathname.includes('/newspaperlist') ||
      location.pathname.includes('/videolist') ||
      location.pathname.includes('/video-frame') 
    ) {
      return true;
    } else {
      return false;
    }
  }
  openMenu() {
    this.menuFlag = true;
  }
  closeMenu() {
    this.menuFlag = false;
  }
  signOut() {
    this.lh.removeUserKeyLocalStorage();
    this.auth.checkAgain();
    this.route
      .navigate(['/home']);
  }
  back() {
    this._location.back()
  }
}
