import { TestBed } from '@angular/core/testing';

import { GymListService } from './gym-list.service';

describe('GymListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GymListService = TestBed.get(GymListService);
    expect(service).toBeTruthy();
  });
});
