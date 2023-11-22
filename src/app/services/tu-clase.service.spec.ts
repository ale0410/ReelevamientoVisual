import { TestBed } from '@angular/core/testing';

import { TuClaseService } from './tu-clase.service';

describe('TuClaseService', () => {
  let service: TuClaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TuClaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
