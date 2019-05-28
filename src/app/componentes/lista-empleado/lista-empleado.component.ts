import { Empleado } from './../../model/Empleado';
import { Component, OnInit } from '@angular/core';
import { EmpleadosMockService } from 'src/app/servicios/empleados-mock.service';

@Component({
  selector: 'app-lista-empleado',
  templateUrl: './lista-empleado.component.html',
  styleUrls: ['./lista-empleado.component.css']
})
export class ListaEmpleadoComponent implements OnInit {

    private empleadoSeleccionado; // = new Empleado( 0, '', '', '', 0)

    private empleados: Empleado[];

  constructor(private empleadosService : EmpleadosMockService) { 

    
  }

  ngOnInit() {
    this.empleadosService.getAllEmpleados().subscribe(
      empleados => this.empleados = empleados
    );
  }

  onSelect(empleado: Empleado) {
    this.empleadoSeleccionado = empleado;
  }

}
