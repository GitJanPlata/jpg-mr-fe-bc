export enum Sexo {
    Masculino = 'Masculino',
    Femenino = 'Femenino',
}


export class Persona {
    nombre: string;
    edad: number;
    sexo: Sexo;
    estaPresente: boolean;

    constructor(nombre: string, edad: number, sexo: Sexo) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.estaPresente = true;
    }

    // Esta es la operación que estudiante y profesor comparten para saber si estan presentes
    determinarPresencia() {
    this.estaPresente = Math.random() < 0.5;
    }
}