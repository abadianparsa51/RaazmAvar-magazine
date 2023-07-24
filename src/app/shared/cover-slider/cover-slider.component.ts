import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cover-slider',
  templateUrl: './cover-slider.component.html',
  styleUrls: ['./cover-slider.component.scss']
})
export class CoverSliderComponent implements OnInit {
  @Input() data: any;
  constructor() {}

  ngOnInit() {}
}
