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
    // Esta es la operación que estudiante y profesor comparten para saber si estan presentes
    Persona.prototype.determinarPresencia = function () {
        this.estaPresente = Math.random() < 0.5;
    };
    return Persona;
}());
exports.Persona = Persona;
