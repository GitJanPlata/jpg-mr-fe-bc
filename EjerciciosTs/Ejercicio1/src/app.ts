import { Serie } from './Serie';
import { Videojuego } from './Videojuego';
import {Entregable} from './Entregable';


 // Crear arrays de Series y Videojuegos
const series: Serie[] = [
    new Serie("Friends", "David Crane", 10, true, "Comedia"),
    new Serie("Breaking Bad", "Vince Gilligan", 5, false, "Drama"),
    new Serie("Stranger Things", "The Duffer Brothers", 4, true, "Ciencia ficción"),
    new Serie("Game of Thrones", "David Benioff", 8, true, "Fantasía"),
    new Serie("The Crown", "Peter Morgan", 6, false, "Drama histórico")
];

const videojuegos: Videojuego[] = [
    new Videojuego("The Legend of Zelda: Breath of the Wild", 500, "Aventura", "Nintendo"),
    new Videojuego("Red Dead Redemption 2", 60, "Acción", "Rockstar Games"),
    new Videojuego("The Witcher 3: Wild Hunt", 70, "RPG", "CD Projekt"),
    new Videojuego("Grand Theft Auto V", 80, "Acción", "Rockstar Games"),
    new Videojuego("FIFA 21", 10, "Deportes", "EA Sports")
];

  // Entregar algunos Videojuegos y Series
videojuegos[1].entregar();
videojuegos[3].entregar();
series[0].entregar();
series[3].entregar();

  // Contar cuántas Series y Videojuegos están entregados
function contarEntregados(arr: Entregable[]): number {
    let contador = 0;
    for (let i = 0; i < arr.length; i++) {
    if (arr[i].isEntregado()) {
        contador++;
    }
    }
    return contador;
}

const seriesEntregadas = contarEntregados(series);
const videojuegosEntregados = contarEntregados(videojuegos);

console.log(`Series entregadas: ${seriesEntregadas}`);
console.log(`Videojuegos entregados: ${videojuegosEntregados}`);

  // Encontrar el Videojuego con más horas estimadas
let videojuegoMasHoras: Videojuego | undefined;
for (let i = 0; i < videojuegos.length; i++) {
    if (!videojuegoMasHoras || videojuegos[i].getHorasEstimadas() > videojuegoMasHoras.getHorasEstimadas()) {
    videojuegoMasHoras = videojuegos[i];
    }
}

  // Encontrar la Serie con más temporadas
let serieMasTemporadas: Serie | undefined;
for (let i = 0; i < series.length; i++) {
    if (!serieMasTemporadas || series[i].getNumeroTemporadas() > serieMasTemporadas.getNumeroTemporadas()) {
    serieMasTemporadas = series[i];
    }
}

console.log("Videojuego con más horas estimadas:");
console.log(videojuegoMasHoras?.toString());

console.log("Serie con más temporadas:");
console.log(serieMasTemporadas?.toString());