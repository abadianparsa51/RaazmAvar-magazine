import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopFinalPage } from './shop-final.page';

describe('ShopFinalPage', () => {
  let component: ShopFinalPage;
  let fixture: ComponentFixture<ShopFinalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopFinalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopFinalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
