"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiante = void 0;
const Persona_1 = require("./Persona");
class Estudiante extends Persona_1.Persona {
    constructor(nombre, edad, sexo, calificacionActual) {
        super(nombre, edad, sexo);
        this.calificacionActual = calificacionActual;
    }
    // Los estudiantes tienen un 50% de hacer campana
    estaDisponible() {
        return Math.random() > 0.5;
    }
}
exports.Estudiante = Estudiante;
