import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopPagePage } from './shop-page.page';

describe('ShopPagePage', () => {
  let component: ShopPagePage;
  let fixture: ComponentFixture<ShopPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
