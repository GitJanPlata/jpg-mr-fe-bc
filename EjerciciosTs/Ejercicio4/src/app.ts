import { Estudiante } from './Estudiante';
import {Sexo} from './Persona';
import { Profesor} from './Profesor';
import { Aula ,Materia } from './Aula';


// Crear algunos estudiantes
let estudiante1 = new Estudiante('Juan', 20, Sexo.Masculino, 2);
let estudiante2 = new Estudiante('Ana', 19, Sexo.Femenino, 9);
let estudiante3 = new Estudiante('Pedro', 21, Sexo.Masculino, 7);
let estudiante4 = new Estudiante('Paco', 20, Sexo.Masculino, 4);
let estudiante5 = new Estudiante('Maria', 19, Sexo.Femenino, 9);
let estudiante6 = new Estudiante('Fulanito', 21, Sexo.Masculino, 3);
let estudiante7 = new Estudiante('Juan', 20, Sexo.Masculino, 2);
let estudiante8 = new Estudiante('Pili', 19, Sexo.Femenino, 9);
let estudiante9 = new Estudiante('Adrian', 21, Sexo.Masculino, 7);
let estudiante10 = new Estudiante('Papo', 20, Sexo.Masculino, 4);


// Crear un profesor
let profesor = new Profesor('Sr. García', 40, Sexo.Masculino, Materia.Matematicas);

// Crear un aula y asignarle estudiantes y un profesor
let aula = new Aula(101, 10, Materia.Matematicas, profesor);
aula.estudiantes.push(estudiante1, estudiante2, estudiante3,estudiante4, estudiante5, estudiante6 ,estudiante7,estudiante8, estudiante9, estudiante10);

// Determinar si se puede dar clase
let puedeDarClase = aula.puedeDarseClase();
console.log('¿Se puede dar clase?', puedeDarClase ? 'Sí' : 'No');

// Si se puede dar clase, calcular cuántos estudiantes están aprobados y cuántos suspendidos
if (puedeDarClase) {
    let calificaciones = aula.obtenerCalificaciones();
    console.log('Aula Numero', aula.id )
    console.log('Materia impartida:', aula.materia )
    console.log('Estudiantes aprobados:', calificaciones.aprobados);
    console.log('Estudiantes suspendidos:', calificaciones.suspendidos);
}