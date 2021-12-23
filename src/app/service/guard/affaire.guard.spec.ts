import { TestBed } from '@angular/core/testing';

import { AffaireGuard } from './affaire.guard';

describe('AffaireGuard', () => {
  let guard: AffaireGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AffaireGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
