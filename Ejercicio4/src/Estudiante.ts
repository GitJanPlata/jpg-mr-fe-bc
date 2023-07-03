import { Persona, Sexo } from './Persona';


export class Estudiante extends Persona {
    calificacionActual: number;

    constructor(nombre: string, edad: number, sexo: Sexo, calificacionActual: number) {
    super(nombre, edad, sexo);
    this.calificacionActual = calificacionActual;
    }

    // Los estudiantes tienen un 50% de hacer campana
    estaDisponible(): boolean {
        return Math.random() > 0.5; 
    }
}