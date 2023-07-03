export class Espectador {
    public nombre: string;
    public edad: number;
    public dinero: number;

    constructor(newNom: string = generateRandomName(), newEdad: number = 0) {
        this.nombre = newNom;
        this.edad = Math.floor(Math.random() * 80) + 1;
        this.dinero = Math.floor(Math.random() * 0) + 1;
    }
}

function generateRandomName(): string {
    const nombres = ["Paco", "Juan", "María", "Luis", "Ana", "Carlos", "Laura", "Pedro", "Isabel","Macu","Pipo","Pepe","Lorena","Carmen","Gorlok the destroyer"];
    const index = Math.floor(Math.random() * nombres.length);
    return nombres[index];
}

