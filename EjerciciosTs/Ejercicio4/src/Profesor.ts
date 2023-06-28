import { Persona } from './Persona';
import { Sexo } from './Persona';
import { Materia } from './Aula';

export class Profesor extends Persona {
materia: Materia;

constructor(nombre: string, edad: number, sexo: Sexo, materia: Materia) {
    super(nombre, edad, sexo);
    this.materia = materia;
}

estaDisponible(): boolean {
    return Math.random() > 0.2; // 20% de probabilidad de que el profesor no esté disponible
}
}