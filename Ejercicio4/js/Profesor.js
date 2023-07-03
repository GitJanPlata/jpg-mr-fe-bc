"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profesor = void 0;
const Persona_1 = require("./Persona");
// La clase `Profesor` extiende la clase `Persona`
class Profesor extends Persona_1.Persona {
    constructor(nombre, edad, sexo, materia) {
        super(nombre, edad, sexo); // Llama al constructor de la clase padre `Persona`
        this.materia = materia; // Asigna la materia al profesor
    }
    // Método para verificar si el profesor está disponible
    estaDisponible() {
        return Math.random() > 0.2;
    }
}
exports.Profesor = Profesor;
