import { TestBed } from '@angular/core/testing';

import { EmpleadosMockService } from './empleados-mock.service';

describe('EmpleadosMockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpleadosMockService = TestBed.get(EmpleadosMockService);
    expect(service).toBeTruthy();
  });
});
