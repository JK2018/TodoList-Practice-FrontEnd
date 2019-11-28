import { TestBed } from '@angular/core/testing';

import { HardCodedAuthService } from './hard-coded-auth.service';

describe('HardCodedAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HardCodedAuthService = TestBed.get(HardCodedAuthService);
    expect(service).toBeTruthy();
  });
});
