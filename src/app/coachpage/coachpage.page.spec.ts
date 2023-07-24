import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachpagePage } from './coachpage.page';

describe('CoachpagePage', () => {
  let component: CoachpagePage;
  let fixture: ComponentFixture<CoachpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachpagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
