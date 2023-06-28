import { Estudiante } from './Estudiante';
import { Profesor } from './Profesor';
import { Sexo } from './Persona';

export enum Materia {
Matematicas = 'Matematicas',
Filosofia = 'Filosofia',
Fisica = 'Fisica',
}

export class Aula {
id: number;
maxEstudiantes: number;
materia: Materia;
profesor: Profesor;
estudiantes: Estudiante[] = [];

constructor(id: number, maxEstudiantes: number, materia: Materia, profesor: Profesor) {
    this.id = id;
    this.maxEstudiantes = maxEstudiantes;
    this.materia = materia;
    this.profesor = profesor;
}

puedeDarseClase(): boolean {
    const profesorDisponible = this.profesor.estaDisponible();
    const profesorCorrecto = this.profesor.materia === this.materia;
    const estudiantesPresentes = this.estudiantes.filter(e => e.estaDisponible()).length;
    const suficientesEstudiantes = estudiantesPresentes > (this.maxEstudiantes / 2);

    return profesorDisponible && profesorCorrecto && suficientesEstudiantes;
}

obtenerCalificaciones() {
    const aprobados = this.estudiantes.filter(e => e.calificacionActual >= 5);
    const suspendidos = this.estudiantes.filter(e => e.calificacionActual < 5);
    const aprobadosMasculino = aprobados.filter(e => e.sexo === Sexo.Masculino).length;
    const aprobadosFemenino = aprobados.filter(e => e.sexo === Sexo.Femenino).length;

    return {
    aprobados: {
        total: aprobados.length,
        masculino: aprobadosMasculino,
        femenino: aprobadosFemenino
    },
    suspendidos: suspendidos.length
    };
}
}