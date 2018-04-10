import { TestBed, inject } from '@angular/core/testing';

import { SeitService } from './seit.service';

describe('SeitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeitService]
    });
  });

  it('should be created', inject([SeitService], (service: SeitService) => {
    expect(service).toBeTruthy();
  }));
});
