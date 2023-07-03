"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aula = exports.Materia = void 0;
var Persona_1 = require("./Persona");
var Materia;
(function (Materia) {
    Materia["Matematicas"] = "Matematicas";
    Materia["Filosofia"] = "Filosofia";
    Materia["Fisica"] = "Fisica";
})(Materia || (exports.Materia = Materia = {}));
var Aula = /** @class */ (function () {
    function Aula(id, maxEstudiantes, materia, profesor) {
        this.estudiantes = []; // Arreglo de estudiantes presentes en el aula, inicializado como un arreglo vacío
        this.id = id;
        this.maxEstudiantes = maxEstudiantes;
        this.materia = materia;
        this.profesor = profesor;
    }
    Aula.prototype.puedeDarseClase = function () {
        var profesorDisponible = this.profesor.estaDisponible(); // Verifica si el profesor está disponible
        var profesorCorrecto = this.profesor.materia === this.materia; // Verifica si el profesor enseña la materia correcta
        var estudiantesPresentes = this.estudiantes.filter(function (e) { return e.estaDisponible(); }).length; // Cuenta la cantidad de estudiantes presentes en el aula
        var suficientesEstudiantes = estudiantesPresentes > (this.maxEstudiantes / 2); // Verifica si hay suficientes estudiantes presentes (más de la mitad de la capacidad máxima del aula)
        return profesorDisponible && profesorCorrecto && suficientesEstudiantes; // Devuelve true si se cumplen todas las condiciones para que se pueda dar clase en el aula
    };
    Aula.prototype.obtenerCalificaciones = function () {
        var aprobados = this.estudiantes.filter(function (e) { return e.calificacionActual >= 5; }); // Filtra los estudiantes aprobados (con calificación igual o mayor a 5)
        var suspendidos = this.estudiantes.filter(function (e) { return e.calificacionActual < 5; }); // Filtra los estudiantes suspendidos (con calificación menor a 5)
        var aprobadosMasculino = aprobados.filter(function (e) { return e.sexo === Persona_1.Sexo.Masculino; }).length; // Cuenta la cantidad de estudiantes aprobados de género masculino
        var aprobadosFemenino = aprobados.filter(function (e) { return e.sexo === Persona_1.Sexo.Femenino; }).length; // Cuenta la cantidad de estudiantes aprobados de género femenino
        return {
            aprobados: {
                total: aprobados.length,
                masculino: aprobadosMasculino,
                femenino: aprobadosFemenino // Cantidad de estudiantes aprobados de género femenino
            },
            suspendidos: suspendidos.length // Cantidad de estudiantes suspendidos
        };
    };
    return Aula;
}());
exports.Aula = Aula;
