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
exports.Estudiante = void 0;
var Persona_1 = require("./Persona");
var Estudiante = /** @class */ (function (_super) {
    __extends(Estudiante, _super);
    function Estudiante(nombre, edad, sexo, calificacionActual) {
        var _this = _super.call(this, nombre, edad, sexo) || this;
        _this.calificacionActual = calificacionActual;
        return _this;
    }
    // Los estudiantes tienen un 50% de hacer campana
    Estudiante.prototype.estaDisponible = function () {
        return Math.random() > 0.5; // 50% de probabilidad de que el profesor no esté disponible
    };
    return Estudiante;
}(Persona_1.Persona));
exports.Estudiante = Estudiante;
