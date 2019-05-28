import { Component, OnInit, Input } from '@angular/core';
import { Empleado } from 'src/app/model/Empleado';

@Component({
  selector: 'app-detalle-empleado',
  templateUrl: './detalle-empleado.component.html',
  styleUrls: ['./detalle-empleado.component.css']
})
export class DetalleEmpleadoComponent implements OnInit {

  @Input()
  private empleado: Empleado;

  constructor() { }

  ngOnInit() {
  }

}
