import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GympagePage } from './gympage.page';

describe('GympagePage', () => {
  let component: GympagePage;
  let fixture: ComponentFixture<GympagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GympagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GympagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
