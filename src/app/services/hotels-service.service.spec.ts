import { TestBed } from '@angular/core/testing';

import { HotelsService } from './hotels-service.service';

describe('HotelsServiceService', () => {
  let service: HotelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
