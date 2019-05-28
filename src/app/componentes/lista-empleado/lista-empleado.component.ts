import { MessagesMockService } from './../../servicios/messages-mock.service';
import { Empleado } from './../../model/Empleado';
import { Component, OnInit } from '@angular/core';
import { EmpleadosMockService } from 'src/app/servicios/empleados-mock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-empleado',
  templateUrl: './lista-empleado.component.html',
  styleUrls: ['./lista-empleado.component.css']
})
export class ListaEmpleadoComponent implements OnInit {

    private empleadoSeleccionado; // = new Empleado( 0, '', '', '', 0)

    private empleados: Empleado[];

    constructor(private empleadosService : EmpleadosMockService, 
      private messagesMockService : MessagesMockService,
      private router : Router) {      
    }

  ngOnInit() {
    this.empleadosService.getAllEmpleados().subscribe(
      empleados => {this.empleados = empleados; /*this.messagesMockService.add("Empleados retornados");*/}
    );
  }

  onSelect(empleado: Empleado) {
    //this.empleadoSeleccionado = empleado;
    //this.messagesMockService.add("Empleados seleccionado");
    this.router.navigate(["/listaEmpleados/detalle/"+empleado.id]);
  }

  nuevoEmpleado() {
    this.empleadoSeleccionado = new Empleado();
  }

  onNuevoEmpleado(empleado : Empleado) {
    this.empleadosService.addEmpleado(empleado).subscribe(
      empleado => this.empleados.push(empleado)
    ) ;
  }
}
