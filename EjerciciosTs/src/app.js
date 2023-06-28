"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Serie_1 = require("./Serie");
var Videojuego_1 = require("./Videojuego");
// Crear arrays de Series y Videojuegos
var series = [
    new Serie_1.Serie("Friends", "David Crane"),
    new Serie_1.Serie("Breaking Bad", "Vince Gilligan"),
    new Serie_1.Serie("Stranger Things", "The Duffer Brothers"),
    new Serie_1.Serie("Game of Thrones", "David Benioff"),
    new Serie_1.Serie("The Crown", "Peter Morgan")
];
var videojuegos = [
    new Videojuego_1.Videojuego("The Legend of Zelda: Breath of the Wild", 50, "Aventura", "Nintendo"),
    new Videojuego_1.Videojuego("Red Dead Redemption 2", 60, "Acción", "Rockstar Games"),
    new Videojuego_1.Videojuego("The Witcher 3: Wild Hunt", 70, "RPG", "CD Projekt"),
    new Videojuego_1.Videojuego("Grand Theft Auto V", 80, "Acción", "Rockstar Games"),
    new Videojuego_1.Videojuego("FIFA 21", 10, "Deportes", "EA Sports")
];
// Entregar algunos Videojuegos y Series
videojuegos[1].entregar();
videojuegos[3].entregar();
series[0].entregar();
series[3].entregar();
// Contar cuántas Series y Videojuegos están entregados
function contarEntregados(arr) {
    var contador = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].isEntregado()) {
            contador++;
        }
    }
    return contador;
}
var seriesEntregadas = contarEntregados(series);
var videojuegosEntregados = contarEntregados(videojuegos);
console.log("Series entregadas: ".concat(seriesEntregadas));
console.log("Videojuegos entregados: ".concat(videojuegosEntregados));
// Encontrar el Videojuego con más horas estimadas
var videojuegoMasHoras;
for (var i = 0; i < videojuegos.length; i++) {
    if (!videojuegoMasHoras || videojuegos[i].getHorasEstimadas() > videojuegoMasHoras.getHorasEstimadas()) {
        videojuegoMasHoras = videojuegos[i];
    }
}
// Encontrar la Serie con más temporadas
var serieMasTemporadas;
for (var i = 0; i < series.length; i++) {
    if (!serieMasTemporadas || series[i].getNumeroTemporadas() > serieMasTemporadas.getNumeroTemporadas()) {
        serieMasTemporadas = series[i];
    }
}
console.log("Videojuego con más horas estimadas:");
console.log(videojuegoMasHoras === null || videojuegoMasHoras === void 0 ? void 0 : videojuegoMasHoras.toString());
console.log("Serie con más temporadas:");
console.log(serieMasTemporadas === null || serieMasTemporadas === void 0 ? void 0 : serieMasTemporadas.toString());
