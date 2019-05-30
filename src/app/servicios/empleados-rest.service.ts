import { Empleado } from './../model/Empleado';
import { EmpleadosIntService } from './empleados-int.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
 
@Injectable({
  providedIn: 'root'
})
export class EmpleadosRestService implements EmpleadosIntService {
  private empleadosRestURL = environment.empleadosRestURL;

  constructor(private httpClient: HttpClient) { }
  
  getAllEmpleados():  Observable<Empleado[]>{
     return this.httpClient.get<Empleado[]>(this.empleadosRestURL);
  }

  addEmpleado(newEmpleado: Empleado): Observable<Empleado> {
    return this.httpClient.post<Empleado>(this.empleadosRestURL, newEmpleado);
  }

  getEmpleado(id: number): Observable<Empleado> {
    return this.httpClient.get<Empleado>(this.empleadosRestURL+"/"+id);
  }

  updateEmpleado(newEmpleado: Empleado): Observable<Empleado> {
    return this.httpClient.put<Empleado>(this.empleadosRestURL+"/"+newEmpleado.id, newEmpleado);
  }
  deleteEmpleado(id: number): Observable<Empleado> {
    return this.httpClient.delete<Empleado>(this.empleadosRestURL+"/"+id);
  }
}
