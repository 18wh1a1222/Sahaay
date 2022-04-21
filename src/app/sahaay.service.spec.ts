import { TestBed } from '@angular/core/testing';

import { SahaayService } from './sahaay.service';

describe('SahaayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SahaayService = TestBed.get(SahaayService);
    expect(service).toBeTruthy();
  });
});
