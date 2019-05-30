import { Empleado } from './../model/Empleado';
import { Injectable } from '@angular/core';
import { EmpleadosIntService } from './empleados-int.service';
import { EmpleadosRestService } from './empleados-rest.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosAdapterService implements EmpleadosIntService {
 
  constructor(private empleadosIntService: EmpleadosRestService) { }

  getAllEmpleados():  Observable<Empleado[]>{
    return this.empleadosIntService.getAllEmpleados();
  }

  addEmpleado(newEmpleado: Empleado): Observable<Empleado> {
    return this.empleadosIntService.addEmpleado(newEmpleado);
  }

  getEmpleado(id: number): Observable<Empleado> {
    return this.empleadosIntService.getEmpleado(id);
  }

  updateEmpleado(newEmpleado: Empleado): Observable<Empleado> {
    return this.empleadosIntService.updateEmpleado(newEmpleado);
  }

  deleteEmpleado(id: number): Observable<Empleado> {
    return this.empleadosIntService.deleteEmpleado(id);
  }
}
