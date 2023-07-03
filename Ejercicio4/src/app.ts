import { Estudiante } from './Estudiante';
import { Sexo } from './Persona';
import { Profesor } from './Profesor';
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
let estudiante11 = new Estudiante('Carlos', 18, Sexo.Femenino, 5);
let estudiante12 = new Estudiante('Julia', 20, Sexo.Femenino, 8);
let estudiante13 = new Estudiante('Esteban', 22, Sexo.Masculino, 6);
let estudiante14 = new Estudiante('Laura', 19, Sexo.Femenino, 7);
let estudiante15 = new Estudiante('Daniel', 21, Sexo.Femenino, 4);
let estudiante16 = new Estudiante('Silvia', 20, Sexo.Femenino, 9);
let estudiante17 = new Estudiante('Francisco', 21, Sexo.Masculino, 2);
let estudiante18 = new Estudiante('Lucia', 22, Sexo.Masculino, 7);
let estudiante19 = new Estudiante('Sergio', 23, Sexo.Masculino, 4);
let estudiante20 = new Estudiante('Rosa', 24, Sexo.Masculino, 3);

// Crear profesor
let profesor = new Profesor('Sr. García', 40, Sexo.Masculino, Materia.Matematicas);
let profesor2 = new Profesor('Sra. Pérez', 45, Sexo.Femenino, Materia.Filosofia);
let profesor3 = new Profesor('Sr. Fernández', 39, Sexo.Masculino, Materia.Fisica);

// Crea aulas y asignarles estudiantes y un profesor
let aula = new Aula(101, 10, Materia.Matematicas, profesor);
aula.estudiantes.push(estudiante1, estudiante2, estudiante3,estudiante4, estudiante5, estudiante6 ,estudiante7,estudiante8, estudiante9, estudiante10);

let aula2 = new Aula(202, 5, Materia.Filosofia, profesor2);
aula2.estudiantes.push(estudiante11, estudiante12, estudiante13, estudiante14, estudiante15);

let aula3 = new Aula(303, 5, Materia.Fisica, profesor3);
aula3.estudiantes.push(estudiante16, estudiante17, estudiante18, estudiante19, estudiante20);
// Determina si se puede dar clase
let puedeDarClase = aula.puedeDarseClase();
console.log('¿Se puede dar clase en la aula '+ aula.id +'?', puedeDarClase ? 'Sí' : 'No');
console.log('-------------------------');
// Si se puede dar clase, revisa cuántos estudiantes están aprobados y cuántos suspendidos
if (puedeDarClase) {
    var calificaciones = aula.obtenerCalificaciones();
    console.log('Materia impartida:', aula.materia);
    console.log('Nombre del profesor:', profesor.nombre);
    console.log('Matéria del profesor:', profesor.materia);
    console.log('Estudiantes aprobados:', calificaciones.aprobados);
    console.log('Estudiantes suspendidos:', calificaciones.suspendidos);
    console.log('-------------------------');
    
}

puedeDarClase = aula2.puedeDarseClase();
console.log('¿Se puede dar clase en la aula '+ aula2.id +'?', puedeDarClase ? 'Sí' : 'No');
console.log('-------------------------');

if (puedeDarClase) {
        calificaciones = aula2.obtenerCalificaciones();
    console.log('Materia impartida:', aula2.materia);
    console.log('Nombre del profesor:', profesor2.nombre);
    console.log('Matéria del profesor:', profesor2.materia);
    console.log('Estudiantes aprobados:', calificaciones.aprobados);
    console.log('Estudiantes suspendidos:', calificaciones.suspendidos);
    console.log('-------------------------');
}

puedeDarClase = aula3.puedeDarseClase();
console.log('¿Se puede dar clase en la aula '+ aula3.id +'?', puedeDarClase ? 'Sí' : 'No');
console.log('-------------------------');

if (puedeDarClase) {
        calificaciones = aula3.obtenerCalificaciones();
    console.log('Materia impartida:', aula3.materia);
    console.log('Nombre del profesor:', profesor3.nombre);
    console.log('Matéria del profesor:', profesor3.materia);
    console.log('Estudiantes aprobados:', calificaciones.aprobados);
    console.log('Estudiantes suspendidos:', calificaciones.suspendidos);
    console.log('-------------------------');
}