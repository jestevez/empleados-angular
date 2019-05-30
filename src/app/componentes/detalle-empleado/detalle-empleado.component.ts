import { EmpleadosAdapterService } from './../../servicios/empleados-adapter.service';
import { DetallesEmpleadoService } from './../../servicios/detalles-empleado.service';
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

  //@Output() addEmpleado = new EventEmitter<Empleado>();

  constructor(private route :ActivatedRoute,
        private location : Location,
        private empleadosService: EmpleadosAdapterService,
        private detallesEmpleadoService: DetallesEmpleadoService) {
      
  }

  ngOnInit() {
    // Comprobar la ruta de petición. Si es /detalle hacer this.getEmpleado,
    // si es /nuevoEmpleado hacer un new sobre this.empleado
    this.route.url.subscribe(
      segments => segments.forEach(
        segment => {
          switch (segment.path) {
            case 'detalle':
              this.getEmpleadoFromService();
              break;

            case 'nuevoEmpleado':
              this.empleado = new Empleado();
              break;
          }
        }
      )
    );

    // Nos subcribimos al observable que emite empleados seleccionados
    this.detallesEmpleadoService.getObservableDetallesEmpleado().subscribe(
      empleado => this.empleado = empleado
    );
  }

  private getEmpleadoFromService() {
    // Recuperamos id de la ruta actual y pedimos empleado al servicio
    // Lo recuperamos ya que el evento de actualizaDetallesEmpleadoSeleccionado se lanza antes que nos susbribamos
    const id = +this.route.snapshot.paramMap.get('id');
    console.log("getEmpleadoFromService " +id);
    this.empleadosService.getEmpleado(id).subscribe(
      empleado => this.empleado = empleado
    );
  }

  onGuardar() {
    // console.log(this.empleado);
    //this.addEmpleado.emit(this.empleado);
    this.detallesEmpleadoService.creaNuevoEmpleado(this.empleado);
    
  }

}
