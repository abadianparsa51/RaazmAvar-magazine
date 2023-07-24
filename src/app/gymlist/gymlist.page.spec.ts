import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GymlistPage } from './gymlist.page';

describe('GymlistPage', () => {
  let component: GymlistPage;
  let fixture: ComponentFixture<GymlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymlistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GymlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
