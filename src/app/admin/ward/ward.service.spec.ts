import { TestBed, inject } from '@angular/core/testing';

import { WardService } from './ward.service';

describe('WardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WardService]
    });
  });

  it('should be created', inject([WardService], (service: WardService) => {
    expect(service).toBeTruthy();
  }));
});
