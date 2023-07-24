import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shop-cards',
  templateUrl: './shop-cards.component.html',
  styleUrls: ['./shop-cards.component.scss'],
})
export class ShopCardsComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit() { }

}
