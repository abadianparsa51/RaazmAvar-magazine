import { TestBed } from '@angular/core/testing';

import { NewspaperlistService } from './newspaperlist.service';

describe('NewspaperlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewspaperlistService = TestBed.get(NewspaperlistService);
    expect(service).toBeTruthy();
  });
});
