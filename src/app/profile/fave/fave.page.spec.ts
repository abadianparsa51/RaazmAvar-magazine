import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavePage } from './fave.page';

describe('FavePage', () => {
  let component: FavePage;
  let fixture: ComponentFixture<FavePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
