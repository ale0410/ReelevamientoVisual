import { TestBed } from '@angular/core/testing';

import { FirestoresService } from './firestores.service';

describe('FirestoresService', () => {
  let service: FirestoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirestoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
