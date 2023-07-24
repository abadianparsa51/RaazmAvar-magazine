import { TestBed } from '@angular/core/testing';

import { FavesService } from './faves.service';

describe('FavesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FavesService = TestBed.get(FavesService);
    expect(service).toBeTruthy();
  });
});
