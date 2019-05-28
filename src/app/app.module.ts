import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListaEmpleadoComponent } from './componentes/lista-empleado/lista-empleado.component';
import { DetalleEmpleadoComponent } from './componentes/detalle-empleado/detalle-empleado.component';
import { MessagesComponent } from './componentes/messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaEmpleadoComponent,
    DetalleEmpleadoComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
