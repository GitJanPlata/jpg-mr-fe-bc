import { Pelicula } from './pelicula';
import { Espectador } from './espectador';

export class Cine {
    private pelicula: Pelicula;
    private precioEntrada: number;
    private asientos: Array<Array<Espectador | null>>;

    constructor(pelicula: Pelicula, precioEntrada: number) {
    this.pelicula = pelicula;
    this.precioEntrada = precioEntrada;
    this.asientos = this.generarAsientos();
    }

    private generarAsientos(): Array<Array<Espectador | null>> {
    const filas = 8;
    const columnas = 9;
    const asientos: Array<Array<Espectador | null>> = [];

    for (let fila = filas; fila >= 1; fila--) {
        const filaAsientos: Array<Espectador | null> = [];

        for (let columna = 1; columna <= columnas; columna++) {
        filaAsientos.push(null);
        }

        asientos.push(filaAsientos);
    }

    return asientos;
    }

    private buscarAsientoLibre(): { fila: number; columna: number } | null {
    const filas = this.asientos.length;
    const columnas = this.asientos[0].length;

    for (let fila = 0; fila < filas; fila++) {
        for (let columna = 0; columna < columnas; columna++) {
        if (this.asientos[fila][columna] === null) {
            return { fila: fila + 1, columna: columna + 1 };
            }
        }
    }

    return null;
    }

    public simularEspectadores(numEspectadores: number): void {
    for (let i = 0; i < numEspectadores; i++) {
        const espectador = new Espectador();
        const asientoLibre = this.buscarAsientoLibre();

        if (asientoLibre && espectador.edad >= this.pelicula.edadMinima && espectador.dinero >= this.precioEntrada) {
        this.asientos[asientoLibre.fila - 1][asientoLibre.columna - 1] = espectador;
        console.log(`${espectador.nombre} se ha sentado en el asiento ${asientoLibre.fila}${String.fromCharCode(65 + asientoLibre.columna - 1)}`);
        } else {
        console.log(`${espectador.nombre} no cumple los requisitos para ver la peli.`);
        }
    }
    }

    public mostrarEstadoAsientos(): void {
    console.log("Estado de los asientos:");

    for (let fila = 0; fila < this.asientos.length; fila++) {
        let filaAsientos = "";

        for (let columna = 0; columna < this.asientos[fila].length; columna++) {
        const asiento = this.asientos[fila][columna];

        if (asiento === null) {
            filaAsientos += "-";
        } else {
            filaAsientos += "X";
        }
        }

        console.log(filaAsientos);
    }
    }
}
