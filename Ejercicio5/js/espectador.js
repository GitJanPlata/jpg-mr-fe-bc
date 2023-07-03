"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Espectador = void 0;
var Espectador = /** @class */ (function () {
    function Espectador(newNom, newEdad) {
        if (newNom === void 0) { newNom = generateRandomName(); }
        if (newEdad === void 0) { newEdad = 0; }
        this.nombre = newNom;
        this.edad = Math.floor(Math.random() * 80) + 1;
        this.dinero = Math.floor(Math.random() * 50) + 1;
    }
    return Espectador;
}());
exports.Espectador = Espectador;
function generateRandomName() {
    var nombres = ["Paco", "Juan", "María", "Luis", "Ana", "Carlos", "Laura", "Pedro", "Isabel", "Macu", "Pipo", "Pepe", "Lorena", "Carmen", "Gorlok the destroyer"];
    var index = Math.floor(Math.random() * nombres.length);
    return nombres[index];
}
