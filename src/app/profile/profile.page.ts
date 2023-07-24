import { MenuService } from './../services/menu.service';
import { ProfileService } from './../services/profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfilePage implements OnInit {
  data: IProfileDataObj['userProfile'];
  constructor(private profile: ProfileService) {}

  ngOnInit() {
    this.profile.getProfileInfo().subscribe((dataInfo: IProfileDataObj) => {
      this.data = dataInfo.userProfile;
    });
  }
}
export interface IProfileDataObj {
  userProfile?: {
    account_amount: string;
    image: string;
    name: string;
    point: string;
  };
}
