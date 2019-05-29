import { DetallesEmpleadoService } from './../../servicios/detalles-empleado.service';
import { EmpleadosMockService } from 'src/app/servicios/empleados-mock.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Empleado } from 'src/app/model/Empleado';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-detalle-empleado',
  templateUrl: './detalle-empleado.component.html',
  styleUrls: ['./detalle-empleado.component.css']
})
export class DetalleEmpleadoComponent implements OnInit {

  //@Input() 
  private empleado: Empleado;

  @Output() addEmpleado = new EventEmitter<Empleado>();

  constructor(private route :ActivatedRoute,
        private location : Location,
        private empleadosMockService: EmpleadosMockService,
        private detallesEmpleadoService: DetallesEmpleadoService) {
      
  }

  ngOnInit() {
    // Recuperamos id de la ruta actual y pedimos empleado al servicio
    // Lo recuperamos ya que el evento de actualizaDetallesEmpleadoSeleccionado se lanza antes que nos susbribamos
    const id = +this.route.snapshot.paramMap.get('id');
    this.empleadosMockService.getEmpleado(id).subscribe(
      empleado => this.empleado = empleado
    );

    // Nos subcribimos al observable que emite empleados seleccionados
    this.detallesEmpleadoService.getObservableDetallesEmpleado().subscribe(
      empleado => this.empleado = empleado
    );

  }

  onGuardar() {
    this.addEmpleado.emit(this.empleado);
  }
}
