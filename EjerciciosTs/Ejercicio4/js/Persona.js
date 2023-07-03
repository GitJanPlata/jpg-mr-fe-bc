"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = exports.Sexo = void 0;
var Sexo;
(function (Sexo) {
    Sexo["Masculino"] = "Masculino";
    Sexo["Femenino"] = "Femenino";
})(Sexo || (exports.Sexo = Sexo = {}));
var Persona = /** @class */ (function () {
    function Persona(nombre, edad, sexo) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.estaPresente = true;
    }
    // Este método es utilizado por las clases estudiantes y profesores para determinar su presencia en el aula
    Persona.prototype.determinarPresencia = function () {
        this.estaPresente = Math.random() < 0.5;
    };
    return Persona;
}());
exports.Persona = Persona;
