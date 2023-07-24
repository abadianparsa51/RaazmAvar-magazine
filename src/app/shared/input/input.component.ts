import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() value: string;
  @Input() type: string;
  @Input() placeholderValue: string;
  @Input() customClass: string;
  @Input() icon: string;
  @Output() mainValue = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}
  sendValue() {
    this.mainValue.emit(this.value);
  }
}
