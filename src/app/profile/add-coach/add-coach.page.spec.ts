import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCoachPage } from './add-coach.page';

describe('AddCoachPage', () => {
  let component: AddCoachPage;
  let fixture: ComponentFixture<AddCoachPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCoachPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCoachPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
