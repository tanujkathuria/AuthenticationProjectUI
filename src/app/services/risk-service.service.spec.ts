import { TestBed } from '@angular/core/testing';

import { RiskServiceService } from './risk-service.service';

describe('RiskServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RiskServiceService = TestBed.get(RiskServiceService);
    expect(service).toBeTruthy();
  });
});
