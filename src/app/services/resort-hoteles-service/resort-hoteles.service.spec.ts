import { TestBed } from '@angular/core/testing';

import { ResortHotelesService } from './resort-hoteles.service';

describe('ResortHotelesService', () => {
  let service: ResortHotelesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResortHotelesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
