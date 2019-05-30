import { EmpleadosRestService } from './../../servicios/empleados-rest.service';
import { DetallesEmpleadoService } from './../../servicios/detalles-empleado.service';
import { MessagesMockService } from './../../servicios/messages-mock.service';
import { Empleado } from './../../model/Empleado';
import { Component, OnInit } from '@angular/core';
import { Router, ParamMap } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-empleado',
  templateUrl: './lista-empleado.component.html',
  styleUrls: ['./lista-empleado.component.css']
})
export class ListaEmpleadoComponent implements OnInit {

    private empleadoSeleccionado: Empleado; // = new Empleado( 0, '', '', '', 0)

    private empleados: Empleado[];

    constructor(private empleadosService : EmpleadosRestService, 
      private detallesEmpleadoService : DetallesEmpleadoService,
      private messagesMockService : MessagesMockService,
      private router : Router,
      private activatedRoute : ActivatedRoute) {      
    }

  ngOnInit() {
    this.loadEmpleados();

    this.detallesEmpleadoService.getObservableEliminarEmpleado().subscribe(
      empleado => {
        console.log("delete "+ empleado);
        this.empleadosService.deleteEmpleado(empleado.id).subscribe(
          empleado => {this.loadEmpleados();}
        );
      }
    );
    

    this.detallesEmpleadoService.getObservableNuevoEmpleado().subscribe(
      
      

      empleado => {
        console.log("getObservableNuevoEmpleado "+empleado);
        if(empleado.id > 0) {
            this.empleadosService.updateEmpleado(empleado).subscribe(
              empleado => {
                this.loadEmpleados();
                this.router.navigate(["/listaEmpleados/detalle/"+empleado.id]); 
                // TODO Marcar seleccionado                
              }
            );
        }
        else {
          this.empleadosService.addEmpleado(empleado).subscribe(
            empleado => {
              this.loadEmpleados();
              this.router.navigate(["/listaEmpleados/detalle/"+empleado.id]); 
              // TODO Marcar seleccionado
              
            }
          );
        }

        
      }
    )
  }


  
  private loadEmpleados() {
    this.empleadosService.getAllEmpleados().subscribe(
      empleados => {
        this.empleados = empleados; 
        /*this.messagesMockService.add("Empleados retornados");*/
        // obtener el id del empleado desde el URL y seleccionarlo
        if(this.activatedRoute.snapshot.firstChild) {
          
          const id = +this.activatedRoute.snapshot.firstChild.paramMap.get('id');
          console.log("seleccionarElemento"+id);
          if(id > 0) {
            this.empleadoSeleccionado = this.empleados.find(empleado => id === empleado.id);
            /*this.empleadosService.getEmpleado(id).subscribe(
              empleado => this.empleadoSeleccionado = empleado
            );*/
          }
        }
        
      }
    );

  }


  onSelect(empleado: Empleado) {
    this.empleadoSeleccionado = empleado;
    //this.messagesMockService.add("Empleados seleccionado");
    this.router.navigate(["/listaEmpleados/detalle/"+empleado.id]);
    this.detallesEmpleadoService.actualizaDetallesEmpleadoSeleccionado(empleado);
  }

  onEliminar(empleado) {
    console.log("onEliminar " +empleado);
    this.detallesEmpleadoService.eliminarEmpleado(empleado);
  }

  nuevoEmpleado() {
    //console.log("nuevoEmpleado");
    this.router.navigate(["/listaEmpleados/nuevoEmpleado/"]);
  }

  /* onNuevoEmpleado(empleado : Empleado) {
    this.empleadosService.addEmpleado(empleado).subscribe(
      empleado => this.empleados.push(empleado)
    ) ;
  }*/
}
