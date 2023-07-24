import { TestBed } from '@angular/core/testing';

import { CoachListService } from './coach-list.service';

describe('CoachListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoachListService = TestBed.get(CoachListService);
    expect(service).toBeTruthy();
  });
});
