"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serie = void 0;
// Constructor
var Serie = /** @class */ (function () {
    function Serie(titulo, creador) {
        this.titulo = titulo;
        this.numeroTemporadas = 3;
        this.entregado = false;
        this.genero = "";
        this.creador = creador;
    }
    // Getters
    Serie.prototype.getTitulo = function () {
        return this.titulo;
    };
    Serie.prototype.getNumeroTemporadas = function () {
        return this.numeroTemporadas;
    };
    Serie.prototype.getGenero = function () {
        return this.genero;
    };
    Serie.prototype.getCreador = function () {
        return this.creador;
    };
    // Setters
    Serie.prototype.setTitulo = function (titulo) {
        this.titulo = titulo;
    };
    Serie.prototype.setNumeroTemporadas = function (numeroTemporadas) {
        this.numeroTemporadas = numeroTemporadas;
    };
    Serie.prototype.setGenero = function (genero) {
        this.genero = genero;
    };
    Serie.prototype.setCreador = function (creador) {
        this.creador = creador;
    };
    Serie.prototype.entregar = function () {
        this.entregado = true;
    };
    Serie.prototype.devolver = function () {
        this.entregado = false;
    };
    Serie.prototype.isEntregado = function () {
        return this.entregado;
    };
    Serie.prototype.compareTo = function (a) {
        if (a instanceof Serie) {
            var serie = a;
            if (this.numeroTemporadas > serie.numeroTemporadas) {
                return 1;
            }
            else if (this.numeroTemporadas < serie.numeroTemporadas) {
                return -1;
            }
            else {
                return 0;
            }
        }
        else {
            throw new Error("El objeto no es una instancia de Serie.");
        }
    };
    Serie.prototype.toString = function () {
        return "T\u00EDtulo: ".concat(this.titulo, "\nN\u00FAmero de temporadas: ").concat(this.numeroTemporadas, "\nEntregado: ").concat(this.entregado, "\nG\u00E9nero: ").concat(this.genero, "\nCreador: ").concat(this.creador);
    };
    return Serie;
}());
exports.Serie = Serie;
