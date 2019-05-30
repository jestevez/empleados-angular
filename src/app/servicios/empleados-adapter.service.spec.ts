import { TestBed } from '@angular/core/testing';

import { EmpleadosAdapterService } from './empleados-adapter.service';

describe('EmpleadosAdapterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpleadosAdapterService = TestBed.get(EmpleadosAdapterService);
    expect(service).toBeTruthy();
  });
});
