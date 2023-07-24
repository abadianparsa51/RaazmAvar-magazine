import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  checkpage() {
    if (
      location.pathname.includes('/post/display/') ||
      location.pathname.includes('/videos/display/') ||
      location.pathname.includes('/authentication')
    ) {
      return true;
    } else {
      return false;
    }
  }
}
