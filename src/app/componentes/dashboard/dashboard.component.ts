import { EmpleadosAdapterService } from './../../servicios/empleados-adapter.service';
import { DetallesEmpleadoService } from './../../servicios/detalles-empleado.service';
import { MessagesMockService } from './../../servicios/messages-mock.service';
import { Empleado } from './../../model/Empleado';
import { Component, OnInit } from '@angular/core';
import { Router, ParamMap } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private empleadoSeleccionado: Empleado; // = new Empleado( 0, '', '', '', 0)

  private empleados: Empleado[];
  private empleadosFull: Empleado[];
  private beginnig = 0;
  private ending = 4;

  private max = 0;
  constructor(private empleadosService : EmpleadosAdapterService, 
    private detallesEmpleadoService : DetallesEmpleadoService,
    private messagesMockService : MessagesMockService,
    private router : Router,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit() {

    this.empleadosService.getAllEmpleados().subscribe(
      empleados => {
        this.max = empleados.length;

        this.empleadosFull = empleados;
        this.empleados = empleados.slice(this.beginnig, this.ending); 
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
  


  onBack () {
    if(this.beginnig >= 1) {
      this.beginnig--;
      this.ending--;
      this.empleados = this.empleadosFull.slice(this.beginnig, this.ending); 
    }
    console.log("onBack " +this.beginnig); 
  }
  onNext() {
    if(this.beginnig >= 0 && this.ending < this.max) {
      this.beginnig++;
      this.ending++; 
      this.empleados = this.empleadosFull.slice(this.beginnig, this.ending); 
    }
    console.log("onNext " ,this.beginnig, this.ending); 
  }

}
