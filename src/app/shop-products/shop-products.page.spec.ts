import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopProductsPage } from './shop-products.page';

describe('ShopProductsPage', () => {
  let component: ShopProductsPage;
  let fixture: ComponentFixture<ShopProductsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopProductsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
