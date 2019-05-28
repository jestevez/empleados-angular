import { Empleado } from '../model/Empleado';

export interface EmpleadosIntService {
    getAllEmpleados(): Empleado[];
}