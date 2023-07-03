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

    // Este método es utilizado por las clases estudiantes y profesores para determinar su presencia en el aula
    determinarPresencia() {
        this.estaPresente = Math.random() < 0.5;
    }
}