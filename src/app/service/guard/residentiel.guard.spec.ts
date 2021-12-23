import { TestBed } from '@angular/core/testing';

import { ResidentielGuard } from './residentiel.guard';

describe('ResidentielGuard', () => {
  let guard: ResidentielGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ResidentielGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
