import { TestBed } from '@angular/core/testing';

import { BcaService } from './bca.service';

describe('BcaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BcaService = TestBed.get(BcaService);
    expect(service).toBeTruthy();
  });
});
