import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-popular-card',
  templateUrl: './popular-card.component.html',
  styleUrls: ['./popular-card.component.scss']
})
export class PopularCardComponent implements OnInit {
  @Input() data: any;
  constructor() {}

  ngOnInit() {}
  /* openPdf(url: any) {
    const options = {
      title: 'My PDF'
    };
    this.document.viewDocument(
      url.getAttribute('pdf').toString(),
      'application/pdf',
      options
    );
  } */
}
