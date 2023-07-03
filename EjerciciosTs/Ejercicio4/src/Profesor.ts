import { Persona } from './Persona';
import { Sexo } from './Persona';
import { Materia } from './Aula';

// La clase `Profesor` extiende la clase `Persona`
export class Profesor extends Persona {
    materia: Materia; // Propiedad para almacenar la materia que enseña el profesor

    constructor(nombre: string, edad: number, sexo: Sexo, materia: Materia) {
        super(nombre, edad, sexo); // Llama al constructor de la clase padre `Persona`
        this.materia = materia; // Asigna la materia al profesor
    }

    // Método para verificar si el profesor está disponible
    estaDisponible(): boolean {
        return Math.random() > 0.2; // Retorna true si el número aleatorio es mayor a 0.2 (20% de probabilidad de que no esté disponible)
    }
}