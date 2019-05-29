import { Empleado } from '../model/Empleado';
import { Observable } from 'rxjs';

export interface EmpleadosIntService {
 
    actualizaDetallesEmpleadoSeleccionado(empleado: Empleado);
    
    getObservableDetallesEmpleado() : Observable<Empleado>;
    
}