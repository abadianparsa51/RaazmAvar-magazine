import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopInsidePage } from './shop-inside.page';

describe('ShopInsidePage', () => {
  let component: ShopInsidePage;
  let fixture: ComponentFixture<ShopInsidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopInsidePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopInsidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
