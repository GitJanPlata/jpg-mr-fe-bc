import { Estudiante } from './Estudiante';
import { Profesor } from './Profesor';
import { Sexo } from './Persona';

export enum Materia {
    Matematicas = 'Matematicas',
    Filosofia = 'Filosofia',
    Fisica = 'Fisica',
}

export class Aula {
    // Identificador del aula
    id: number; 
    // Capacidad máxima de estudiantes en el aula
    maxEstudiantes: number; 
    // Materia que se enseña en el aula
    materia: Materia;
    // Profesor asignado al aula
    profesor: Profesor;
    // Array de estudiantes presentes en el aula, inicializado como un array vacío
    estudiantes: Estudiante[] = []; 

    constructor(id: number, maxEstudiantes: number, materia: Materia, profesor: Profesor) {
        this.id = id;
        this.maxEstudiantes = maxEstudiantes;
        this.materia = materia;
        this.profesor = profesor;
    }

    puedeDarseClase(): boolean {
        // Verifica si el profesor está disponible
        const profesorDisponible = this.profesor.estaDisponible();
        // Verifica si el profesor enseña la materia correcta
        const profesorCorrecto = this.profesor.materia === this.materia;
        // Cuenta la cantidad de estudiantes presentes en el aula
        const estudiantesPresentes = this.estudiantes.filter(e => e.estaDisponible()).length;
        // Verifica si hay suficientes estudiantes presentes (más de la mitad de la capacidad máxima del aula)
        const suficientesEstudiantes = estudiantesPresentes > (this.maxEstudiantes / 2); 
        // Devuelve true si se cumplen todas las condiciones para que se pueda dar clase en el aula
        return profesorDisponible && profesorCorrecto && suficientesEstudiantes; 
    }

    obtenerCalificaciones() {
        // Filtra los estudiantes aprobados (con calificación igual o mayor a 5)
        const aprobados = this.estudiantes.filter(e => e.calificacionActual >= 5);
        // Filtra los estudiantes suspendidos (con calificación menor a 5)
        const suspendidos = this.estudiantes.filter(e => e.calificacionActual < 5);
        // Cuenta la cantidad de estudiantes aprobados de género masculino
        const aprobadosMasculino = aprobados.filter(e => e.sexo === Sexo.Masculino).length;
        // Cuenta la cantidad de estudiantes aprobados de género femenino
        const aprobadosFemenino = aprobados.filter(e => e.sexo === Sexo.Femenino).length; 

        return {
            aprobados: {
                // Cantidad total de estudiantes aprobados
                total: aprobados.length, 
                // Cantidad de estudiantes aprobados de género masculino
                masculino: aprobadosMasculino,
                // Cantidad de estudiantes aprobados de género femenino
                femenino: aprobadosFemenino 
            },
            // Cantidad de estudiantes suspendidos
            suspendidos: suspendidos.length 
        };
    }
}