import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-last-card',
  templateUrl: './last-card.component.html',
  styleUrls: ['./last-card.component.scss']
})
export class LastCardComponent implements OnInit {
  @Input() data: any;
  constructor() {}

  ngOnInit() {}
}
