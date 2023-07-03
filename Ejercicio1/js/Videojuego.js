"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Videojuego = void 0;
var Videojuego = /** @class */ (function () {
    function Videojuego(titulo, horasEstimadas, genero, compañia) {
        this.titulo = titulo;
        this.horasEstimadas = horasEstimadas || 10;
        this.entregado = false;
        this.genero = genero || "";
        this.compañia = compañia || "";
    }
    Videojuego.prototype.entregar = function () {
        this.entregado = true;
    };
    Videojuego.prototype.devolver = function () {
        this.entregado = false;
    };
    Videojuego.prototype.isEntregado = function () {
        return this.entregado;
    };
    Videojuego.prototype.compareTo = function (a) {
        if (a instanceof Videojuego) {
            var videojuego = a;
            if (this.horasEstimadas > videojuego.horasEstimadas) {
                return 1;
            }
            else if (this.horasEstimadas < videojuego.horasEstimadas) {
                return -1;
            }
            else {
                return 0;
            }
        }
        else {
            throw new Error("El objeto no es una instancia de Videojuego.");
        }
    };
    // Métodos get
    Videojuego.prototype.getTitulo = function () {
        return this.titulo;
    };
    Videojuego.prototype.getHorasEstimadas = function () {
        return this.horasEstimadas;
    };
    Videojuego.prototype.getGenero = function () {
        return this.genero;
    };
    Videojuego.prototype.getCompañia = function () {
        return this.compañia;
    };
    // Métodos set
    Videojuego.prototype.setTitulo = function (titulo) {
        this.titulo = titulo;
    };
    Videojuego.prototype.setHorasEstimadas = function (horasEstimadas) {
        this.horasEstimadas = horasEstimadas;
    };
    Videojuego.prototype.setGenero = function (genero) {
        this.genero = genero;
    };
    Videojuego.prototype.setCompañia = function (compañia) {
        this.compañia = compañia;
    };
    // Método toString
    Videojuego.prototype.toString = function () {
        return "T\u00EDtulo: ".concat(this.titulo, "\nHoras estimadas: ").concat(this.horasEstimadas, "\nEntregado: ").concat(this.entregado, "\nG\u00E9nero: ").concat(this.genero, "\nCompa\u00F1\u00EDa: ").concat(this.compañia);
    };
    return Videojuego;
}());
exports.Videojuego = Videojuego;
