
import { Empleado } from './../model/Empleado';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetallesEmpleadoService implements DetallesEmpleadoService{
  // Subject es un Observable dinamico, tiene el metodo next
  private detallesEmpleadoSouce = new Subject<Empleado>();
  // Observable encapsulado usado para que los escuchas se subscriban
  private detalleEmpleado$ = this.detallesEmpleadoSouce.asObservable();

  constructor() { }

  actualizaDetallesEmpleadoSeleccionado(empleado: Empleado) {
    this.detallesEmpleadoSouce.next(empleado);
  }

  getObservableDetallesEmpleado() : Observable<Empleado>{
    return this.detalleEmpleado$;
  }


}
