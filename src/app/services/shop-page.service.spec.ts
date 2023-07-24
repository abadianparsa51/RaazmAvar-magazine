import { TestBed } from '@angular/core/testing';

import { ShopPageService } from './shop-page.service';

describe('ShopPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShopPageService = TestBed.get(ShopPageService);
    expect(service).toBeTruthy();
  });
});
