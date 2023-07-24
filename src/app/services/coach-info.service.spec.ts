import { TestBed } from '@angular/core/testing';

import { CoachInfoService } from './coach-info.service';

describe('CoachInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoachInfoService = TestBed.get(CoachInfoService);
    expect(service).toBeTruthy();
  });
});
