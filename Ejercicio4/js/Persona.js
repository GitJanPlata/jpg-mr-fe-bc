"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = exports.Sexo = void 0;
var Sexo;
(function (Sexo) {
    Sexo["Masculino"] = "Masculino";
    Sexo["Femenino"] = "Femenino";
})(Sexo || (exports.Sexo = Sexo = {}));
class Persona {
    constructor(nombre, edad, sexo) {
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
exports.Persona = Persona;
