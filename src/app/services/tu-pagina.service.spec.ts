import { TestBed } from '@angular/core/testing';

import { TuPaginaService } from './tu-pagina.service';

describe('TuPaginaService', () => {
  let service: TuPaginaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TuPaginaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
