import { MessagesMockService } from 'src/app/servicios/messages-mock.service';
import { Empleado } from './../model/Empleado';
import { Injectable } from '@angular/core';
import { EmpleadosIntService } from './empleados-int.service';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosMockService implements EmpleadosIntService {


  private index = 18;
  private empleados: Empleado[] = [
    new Empleado(11, '32452435H', 'Juan', 'Ruíz', 23),
      { id: 12, cif: '23452348T', nombre: 'Narco', apellidos: 'Bollo', edad: 18 },
      { id: 13, cif: '63653653E', nombre: 'Amaia', apellidos: 'Valdemoro', edad: 29 },
      { id: 14, cif: '76548766O', nombre: 'Enrique', apellidos: 'Iglesias', edad: 87 },
      { id: 15, cif: '34665434Y', nombre: 'Jesús', apellidos: 'Tolondrón', edad: 45 },
      { id: 16, cif: '23676546Q', nombre: 'Olga', apellidos: 'Viza', edad: 56 },
      { id: 17, cif: '09879876O', nombre: 'Josune', apellidos: 'Goikoetxea', edad: 32 },
  ];

  constructor(private messagesMockService : MessagesMockService) { }

  getAllEmpleados():  Observable<Empleado[]>{
    return of(this.empleados).pipe( // Encadenar respuesta luego de obtener el observable
        tap( () => this.messagesMockService.add("("+this.empleados.length+") Empleados recuperados") )
    );
  }

  addEmpleado(newEmpleado: Empleado): Observable<Empleado> {
    // Logica de guardar
    newEmpleado.id = this.index++;
    return of(newEmpleado).pipe(
      tap( () => this.messagesMockService.add("Se ha creado el empleado con id "+newEmpleado.id+" ") )
  );
  }

  getEmpleado(id: number): Observable<Empleado> {
    return of(this.empleados.find(empleado => id === empleado.id));
  }  
  
  updateEmpleado(newEmpleado: Empleado): Observable<Empleado> {
    throw new Error("Method not implemented.");
  }
  deleteEmpleado(id: number): Observable<Empleado> {
    throw new Error("Method not implemented.");
  }
}
