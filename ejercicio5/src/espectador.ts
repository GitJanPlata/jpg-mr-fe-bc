class Espectador {

    public nombre: string;
    public edad: number;
    public dinero: number;

    constructor(newNom:string = "", newEdad:number = 0){
        this.nombre = newNom;
        this.edad = Math.floor(Math.random() * 20) + 1;
        this.dinero = Math.floor(Math.random() * 50) + 1;
    }

}

const persona1 = new Espectador("Juan");
const persona2 = new Espectador("Pablo");
const persona3 = new Espectador("Jose");
const persona4 = new Espectador("Manuel");
console.log(persona1);
console.log(persona2);
console.log(persona3);
console.log(persona4);