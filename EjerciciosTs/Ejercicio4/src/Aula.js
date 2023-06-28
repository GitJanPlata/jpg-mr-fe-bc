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
        this.estudiantes = [];
        this.id = id;
        this.maxEstudiantes = maxEstudiantes;
        this.materia = materia;
        this.profesor = profesor;
    }
    Aula.prototype.puedeDarseClase = function () {
        var profesorDisponible = this.profesor.estaDisponible();
        var profesorCorrecto = this.profesor.materia === this.materia;
        var estudiantesPresentes = this.estudiantes.filter(function (e) { return e.estaDisponible(); }).length;
        var suficientesEstudiantes = estudiantesPresentes > (this.maxEstudiantes / 2);
        return profesorDisponible && profesorCorrecto && suficientesEstudiantes;
    };
    Aula.prototype.obtenerCalificaciones = function () {
        var aprobados = this.estudiantes.filter(function (e) { return e.calificacionActual >= 5; });
        var suspendidos = this.estudiantes.filter(function (e) { return e.calificacionActual < 5; });
        var aprobadosMasculino = aprobados.filter(function (e) { return e.sexo === Persona_1.Sexo.Masculino; }).length;
        var aprobadosFemenino = aprobados.filter(function (e) { return e.sexo === Persona_1.Sexo.Femenino; }).length;
        return {
            aprobados: {
                total: aprobados.length,
                masculino: aprobadosMasculino,
                femenino: aprobadosFemenino
            },
            suspendidos: suspendidos.length
        };
    };
    return Aula;
}());
exports.Aula = Aula;
