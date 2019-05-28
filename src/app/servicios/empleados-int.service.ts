import { Empleado } from '../model/Empleado';
import { Observable } from 'rxjs';

export interface EmpleadosIntService {
    getAllEmpleados(): Observable<Empleado[]>;
}