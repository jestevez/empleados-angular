import { TestBed } from '@angular/core/testing';

import { EmpleadosRestService } from './empleados-rest.service';

describe('EmpleadosRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpleadosRestService = TestBed.get(EmpleadosRestService);
    expect(service).toBeTruthy();
  });
});
