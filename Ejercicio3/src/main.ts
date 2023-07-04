class Raices {
    private a: number;
    private b: number;
    private c: number;

    constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    obtenerRaices(): void {
        const solucion1 = (-this.b + Math.sqrt(this.getDiscriminante())) / (2 * this.a);
        const solucion2 = (-this.b - Math.sqrt(this.getDiscriminante())) / (2 * this.a);
        console.log("Solucion 1");
        console.log(solucion1);
        console.log("Solucion 2");
        console.log(solucion2);
    }

    obtenerRaiz(): void {
        const x = -this.b / (2 * this.a);
        console.log("Unica solucion");
        console.log(x);
    }

    getDiscriminante(): number {
        return Math.pow(this.b, 2) - 4 * this.a * this.c;
    }

    tieneRaices(): boolean {
        return this.getDiscriminante() > 0;
    }

    tieneRaiz(): boolean {
        return this.getDiscriminante() === 0;
    }

    public calcular(): void {
        if (this.tieneRaices()) {
            console.log("La ecuación tiene dos soluciones:");
            this.obtenerRaices();
        } else if (this.tieneRaiz()) {
            console.log("La ecuación tiene una única solución:");
            this.obtenerRaiz();
        } else {
            console.log("La ecuación no tiene soluciones reales.");
        }
    }    
}

const ecuacion = new Raices(1, 4, 3);
console.log("Discriminante:", ecuacion.getDiscriminante());
console.log("¿Tiene raíces?:", ecuacion.tieneRaices());
console.log("¿Tiene raíz única?:", ecuacion.tieneRaiz());
ecuacion.calcular();
ecuacion.obtenerRaices();
ecuacion.obtenerRaiz();