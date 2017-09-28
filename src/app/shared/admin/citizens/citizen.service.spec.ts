import { TestBed, inject } from '@angular/core/testing';

import { CitizenService } from './citizen.service';

describe('CitizenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CitizenService]
    });
  });

  it('should be created', inject([CitizenService], (service: CitizenService) => {
    expect(service).toBeTruthy();
  }));
});
