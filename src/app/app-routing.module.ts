import { DetalleEmpleadoComponent } from './componentes/detalle-empleado/detalle-empleado.component';
import { ListaEmpleadoComponent } from './componentes/lista-empleado/lista-empleado.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'listaEmpleados', component: ListaEmpleadoComponent,
      children: [
        {
          path: 'detalle/:id',
          component: DetalleEmpleadoComponent
        },
        {
          path: 'nuevoEmpleado', 
          component: DetalleEmpleadoComponent 
        }
      ]
    },
    { path: 'dashboard', component: DashboardComponent,
        children: [
          {
            path: 'detalle/:id',
            component: DetalleEmpleadoComponent
          },
          {
            path: 'nuevoEmpleado', 
            component: DetalleEmpleadoComponent 
          }
        ]
      },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
