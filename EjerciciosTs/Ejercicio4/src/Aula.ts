import { Estudiante } from './Estudiante';
import { Profesor } from './Profesor';
import { Sexo } from './Persona';

export enum Materia {
    Matematicas = 'Matematicas',
    Filosofia = 'Filosofia',
    Fisica = 'Fisica',
}

export class Aula {
    id: number; // Identificador del aula
    maxEstudiantes: number; // Capacidad máxima de estudiantes en el aula
    materia: Materia; // Materia que se enseña en el aula
    profesor: Profesor; // Profesor asignado al aula
    estudiantes: Estudiante[] = []; // Arreglo de estudiantes presentes en el aula, inicializado como un arreglo vacío

    constructor(id: number, maxEstudiantes: number, materia: Materia, profesor: Profesor) {
        this.id = id;
        this.maxEstudiantes = maxEstudiantes;
        this.materia = materia;
        this.profesor = profesor;
    }

    puedeDarseClase(): boolean {
        const profesorDisponible = this.profesor.estaDisponible(); // Verifica si el profesor está disponible
        const profesorCorrecto = this.profesor.materia === this.materia; // Verifica si el profesor enseña la materia correcta
        const estudiantesPresentes = this.estudiantes.filter(e => e.estaDisponible()).length; // Cuenta la cantidad de estudiantes presentes en el aula
        const suficientesEstudiantes = estudiantesPresentes > (this.maxEstudiantes / 2); // Verifica si hay suficientes estudiantes presentes (más de la mitad de la capacidad máxima del aula)

        return profesorDisponible && profesorCorrecto && suficientesEstudiantes; // Devuelve true si se cumplen todas las condiciones para que se pueda dar clase en el aula
    }

    obtenerCalificaciones() {
        const aprobados = this.estudiantes.filter(e => e.calificacionActual >= 5); // Filtra los estudiantes aprobados (con calificación igual o mayor a 5)
        const suspendidos = this.estudiantes.filter(e => e.calificacionActual < 5); // Filtra los estudiantes suspendidos (con calificación menor a 5)
        const aprobadosMasculino = aprobados.filter(e => e.sexo === Sexo.Masculino).length; // Cuenta la cantidad de estudiantes aprobados de género masculino
        const aprobadosFemenino = aprobados.filter(e => e.sexo === Sexo.Femenino).length; // Cuenta la cantidad de estudiantes aprobados de género femenino

        return {
            aprobados: {
                total: aprobados.length, // Cantidad total de estudiantes aprobados
                masculino: aprobadosMasculino, // Cantidad de estudiantes aprobados de género masculino
                femenino: aprobadosFemenino // Cantidad de estudiantes aprobados de género femenino
            },
            suspendidos: suspendidos.length // Cantidad de estudiantes suspendidos
        };
    }
}