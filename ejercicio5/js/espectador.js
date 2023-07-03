var Espectador = /** @class */ (function () {
    function Espectador(newNom, newEdad) {
        if (newNom === void 0) { newNom = ""; }
        if (newEdad === void 0) { newEdad = 0; }
        this.nombre = newNom;
        this.edad = Math.floor(Math.random() * 20) + 1;
        this.dinero = Math.floor(Math.random() * 50) + 1;
    }
    return Espectador;
}());
var persona1 = new Espectador("Juan");
var persona2 = new Espectador("Pablo");
var persona3 = new Espectador("Jose");
var persona4 = new Espectador("Manuel");
console.log(persona1);
console.log(persona2);
console.log(persona3);
console.log(persona4);
