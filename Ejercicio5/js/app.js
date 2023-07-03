"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cine_1 = require("../src/cine");
var pelicula_1 = require("../src/pelicula");
// Crear diferentes películas
var pelicula1 = new pelicula_1.Pelicula("The Shawshank Redemption", 142, 18, "Frank Darabont");
var pelicula2 = new pelicula_1.Pelicula("The Godfather", 175, 12, "Francis Ford Coppola");
// Crear salas de cine con la película correspondiente y el precio de entrada
var sala1 = new cine_1.Cine(pelicula1, 8);
var sala2 = new cine_1.Cine(pelicula2, 13);
// Simular espectadores
console.log("Estado sala 1");
console.log("---------------------------");
sala1.simularEspectadores(30);
console.log("---------------------------");
console.log("Estado sala 2");
console.log("---------------------------");
sala2.simularEspectadores(40);
console.log("---------------------------");
// Mostrar el estado de los asientos
sala1.mostrarEstadoAsientos();
sala2.mostrarEstadoAsientos();
