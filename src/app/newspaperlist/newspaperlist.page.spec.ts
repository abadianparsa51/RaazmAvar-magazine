import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewspaperlistPage } from './newspaperlist.page';

describe('NewspaperlistPage', () => {
  let component: NewspaperlistPage;
  let fixture: ComponentFixture<NewspaperlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewspaperlistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewspaperlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
