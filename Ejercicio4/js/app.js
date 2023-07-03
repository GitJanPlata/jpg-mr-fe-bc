"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Estudiante_1 = require("../js/Estudiante");
var Persona_1 = require("../js/Persona");
var Profesor_1 = require("../js/Profesor");
var Aula_1 = require("../js/Aula");
// Crear algunos estudiantes
var estudiante1 = new Estudiante_1.Estudiante('Juan', 20, Persona_1.Sexo.Masculino, 2);
var estudiante2 = new Estudiante_1.Estudiante('Ana', 19, Persona_1.Sexo.Femenino, 9);
var estudiante3 = new Estudiante_1.Estudiante('Pedro', 21, Persona_1.Sexo.Masculino, 7);
var estudiante4 = new Estudiante_1.Estudiante('Paco', 20, Persona_1.Sexo.Masculino, 4);
var estudiante5 = new Estudiante_1.Estudiante('Maria', 19, Persona_1.Sexo.Femenino, 9);
var estudiante6 = new Estudiante_1.Estudiante('Fulanito', 21, Persona_1.Sexo.Masculino, 3);
var estudiante7 = new Estudiante_1.Estudiante('Juan', 20, Persona_1.Sexo.Masculino, 2);
var estudiante8 = new Estudiante_1.Estudiante('Pili', 19, Persona_1.Sexo.Femenino, 9);
var estudiante9 = new Estudiante_1.Estudiante('Adrian', 21, Persona_1.Sexo.Masculino, 7);
var estudiante10 = new Estudiante_1.Estudiante('Papo', 20, Persona_1.Sexo.Masculino, 4);
// Crear un profesor
var profesor = new Profesor_1.Profesor('Sr. García', 40, Persona_1.Sexo.Masculino, Aula_1.Materia.Matematicas);
// Crear un aula y asignarle estudiantes y un profesor
var aula = new Aula_1.Aula(101, 10, Aula_1.Materia.Matematicas, profesor);
aula.estudiantes.push(estudiante1, estudiante2, estudiante3, estudiante4, estudiante5, estudiante6, estudiante7, estudiante8, estudiante9, estudiante10);
// Determinar si se puede dar clase
var puedeDarClase = aula.puedeDarseClase();
console.log('¿Se puede dar clase?', puedeDarClase ? 'Sí' : 'No');
// Si se puede dar clase, calcular cuántos estudiantes están aprobados y cuántos suspendidos
if (puedeDarClase) {
    var calificaciones = aula.obtenerCalificaciones();
    console.log('Aula Numero', aula.id);
    console.log('Materia impartida:', aula.materia);
    console.log('Nombre del profesor:', profesor.nombre);
    console.log('Matéria del profesor:', profesor.materia);
    console.log('Estudiantes aprobados:', calificaciones.aprobados);
    console.log('Estudiantes suspendidos:', calificaciones.suspendidos);
}
