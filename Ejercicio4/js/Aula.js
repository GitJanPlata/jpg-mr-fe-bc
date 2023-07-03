"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aula = exports.Materia = void 0;
const Persona_1 = require("./Persona");
var Materia;
(function (Materia) {
    Materia["Matematicas"] = "Matematicas";
    Materia["Filosofia"] = "Filosofia";
    Materia["Fisica"] = "Fisica";
})(Materia || (exports.Materia = Materia = {}));
class Aula {
    constructor(id, maxEstudiantes, materia, profesor) {
        // Array de estudiantes presentes en el aula, inicializado como un array vacío
        this.estudiantes = [];
        this.id = id;
        this.maxEstudiantes = maxEstudiantes;
        this.materia = materia;
        this.profesor = profesor;
    }
    puedeDarseClase() {
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
        const aprobadosMasculino = aprobados.filter(e => e.sexo === Persona_1.Sexo.Masculino).length;
        // Cuenta la cantidad de estudiantes aprobados de género femenino
        const aprobadosFemenino = aprobados.filter(e => e.sexo === Persona_1.Sexo.Femenino).length;
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
exports.Aula = Aula;
