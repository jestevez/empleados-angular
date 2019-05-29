import { TestBed } from '@angular/core/testing';

import { DetallesEmpleadoService } from './detalles-empleado.service';

describe('DetallesEmpleadoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetallesEmpleadoService = TestBed.get(DetallesEmpleadoService);
    expect(service).toBeTruthy();
  });
});
