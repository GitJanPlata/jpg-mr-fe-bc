import { Cine } from './cine';
import { Pelicula } from './pelicula';

// Crear diferentes películas

const pelicula1 = new Pelicula("The Shawshank Redemption", 142, 18, "Frank Darabont");
const pelicula2 = new Pelicula("The Godfather", 175, 12, "Francis Ford Coppola");


// Crear salas de cine con la película correspondiente y el precio de entrada

const sala1 = new Cine(pelicula1, 8);
const sala2 = new Cine(pelicula2, 13);


// Simular espectadores
console.log("Estado sala 1")
console.log("---------------------------")
sala1.simularEspectadores(30);
console.log("---------------------------")
console.log("Estado sala 2")
console.log("---------------------------")
sala2.simularEspectadores(40);
console.log("---------------------------")

// Mostrar el estado de los asientos
sala1.mostrarEstadoAsientos();
sala2.mostrarEstadoAsientos();
