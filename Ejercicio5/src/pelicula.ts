export class Pelicula {

    public titulo: string;
    public duracion: number;
    public edadMinima: number;
    public director: string;

    constructor(titulo: string, duracion: number, edadMinima: number, director: string) {
        this.titulo = titulo;
        this.duracion = duracion;
        this.edadMinima = edadMinima;
        this.director = director;
    }

}
