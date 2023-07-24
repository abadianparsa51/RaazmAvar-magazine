import { TestBed } from '@angular/core/testing';

import { GymInfoService } from './gym-info.service';

describe('GymInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GymInfoService = TestBed.get(GymInfoService);
    expect(service).toBeTruthy();
  });
});
