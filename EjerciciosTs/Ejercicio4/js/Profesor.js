"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profesor = void 0;
var Persona_1 = require("./Persona");
// La clase `Profesor` extiende la clase `Persona`
var Profesor = /** @class */ (function (_super) {
    __extends(Profesor, _super);
    function Profesor(nombre, edad, sexo, materia) {
        var _this = _super.call(this, nombre, edad, sexo) || this;
        _this.materia = materia; // Asigna la materia al profesor
        return _this;
    }
    // Método para verificar si el profesor está disponible
    Profesor.prototype.estaDisponible = function () {
        return Math.random() > 0.2; // Retorna true si el número aleatorio es mayor a 0.2 (20% de probabilidad de que no esté disponible)
    };
    return Profesor;
}(Persona_1.Persona));
exports.Profesor = Profesor;
