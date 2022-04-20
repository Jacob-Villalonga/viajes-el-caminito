import { TestBed } from '@angular/core/testing';

import { HotelesAtalayaService } from './hoteles-atalaya.service';

describe('HotelesAtalayaService', () => {
  let service: HotelesAtalayaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelesAtalayaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
