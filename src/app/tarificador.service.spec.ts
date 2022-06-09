import { TestBed } from '@angular/core/testing';

import { TarificadorService } from './tarificador.service';

describe('TarificadorService', () => {
  let service: TarificadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TarificadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
