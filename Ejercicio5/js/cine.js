"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cine = void 0;
var espectador_1 = require("./espectador");
var Cine = /** @class */ (function () {
    function Cine(pelicula, precioEntrada) {
        this.pelicula = pelicula;
        this.precioEntrada = precioEntrada;
        this.asientos = this.generarAsientos();
    }
    Cine.prototype.generarAsientos = function () {
        var filas = 8;
        var columnas = 9;
        var asientos = [];
        for (var fila = filas; fila >= 1; fila--) {
            var filaAsientos = [];
            for (var columna = 1; columna <= columnas; columna++) {
                filaAsientos.push(null);
            }
            asientos.push(filaAsientos);
        }
        return asientos;
    };
    Cine.prototype.buscarAsientoLibre = function () {
        var filas = this.asientos.length;
        var columnas = this.asientos[0].length;
        for (var fila = 0; fila < filas; fila++) {
            for (var columna = 0; columna < columnas; columna++) {
                if (this.asientos[fila][columna] === null) {
                    return { fila: fila + 1, columna: columna + 1 };
                }
            }
        }
        return null;
    };
    Cine.prototype.simularEspectadores = function (numEspectadores) {
        for (var i = 0; i < numEspectadores; i++) {
            var espectador = new espectador_1.Espectador();
            var asientoLibre = this.buscarAsientoLibre();
            if (asientoLibre && espectador.edad >= this.pelicula.edadMinima && espectador.dinero >= this.precioEntrada) {
                this.asientos[asientoLibre.fila - 1][asientoLibre.columna - 1] = espectador;
                console.log("".concat(espectador.nombre, " se ha sentado en el asiento ").concat(asientoLibre.fila).concat(String.fromCharCode(65 + asientoLibre.columna - 1)));
            }
            else {
                console.log("".concat(espectador.nombre, " no cumple los requisitos para ver la peli."));
            }
        }
    };
    Cine.prototype.mostrarEstadoAsientos = function () {
        console.log("Estado de los asientos:");
        for (var fila = 0; fila < this.asientos.length; fila++) {
            var filaAsientos = "";
            for (var columna = 0; columna < this.asientos[fila].length; columna++) {
                var asiento = this.asientos[fila][columna];
                if (asiento === null) {
                    filaAsientos += "-";
                }
                else {
                    filaAsientos += "X";
                }
            }
            console.log(filaAsientos);
        }
    };
    return Cine;
}());
exports.Cine = Cine;
