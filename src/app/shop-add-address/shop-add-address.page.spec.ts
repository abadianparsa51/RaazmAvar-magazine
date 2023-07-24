import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopAddAddressPage } from './shop-add-address.page';

describe('ShopAddAddressPage', () => {
  let component: ShopAddAddressPage;
  let fixture: ComponentFixture<ShopAddAddressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopAddAddressPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopAddAddressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
