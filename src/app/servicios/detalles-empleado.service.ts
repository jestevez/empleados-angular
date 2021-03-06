
import { Empleado } from './../model/Empleado';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetallesEmpleadoService implements DetallesEmpleadoService{
  // Subject es un Observable dinamico, tiene el metodo next
  private detallesEmpleadoSource = new Subject<Empleado>();
  private nuevoEmpleadoSource = new Subject<Empleado>();
  private eliminarEmpleadoSource = new Subject<Empleado>();

  // Observable encapsulado usado para que los escuchas se subscriban
  private detalleEmpleado$ = this.detallesEmpleadoSource.asObservable();
  private nuevoEmpleado$ = this.nuevoEmpleadoSource.asObservable();
  private eliminarEmpleado$ = this.eliminarEmpleadoSource.asObservable();

  constructor() { }

  actualizaDetallesEmpleadoSeleccionado(empleado: Empleado) {
    this.detallesEmpleadoSource.next(empleado);
  }

  creaNuevoEmpleado(empleado: Empleado)  {
    this.nuevoEmpleadoSource.next(empleado);
  }

  eliminarEmpleado(empleado: Empleado)  {
    this.eliminarEmpleadoSource.next(empleado);
  }

  getObservableDetallesEmpleado() : Observable<Empleado>{
    return this.detalleEmpleado$;
  }

  getObservableNuevoEmpleado() : Observable<Empleado>{
    return this.nuevoEmpleado$;
  }

  getObservableEliminarEmpleado() : Observable<Empleado>{
    return this.eliminarEmpleado$;
  }

}
