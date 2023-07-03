class Pelicula {

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

const pelicula1 = new Pelicula("The Shawshank Redemption", 142, 18, "Frank Darabont");
const pelicula2 = new Pelicula("The Godfather", 175, 18, "Francis Ford Coppola");
const pelicula3 = new Pelicula("Pulp Fiction", 154, 18, "Quentin Tarantino");
const pelicula4 = new Pelicula("The Dark Knight", 152, 13, "Christopher Nolan");
console.log(pelicula1);
console.log(pelicula2);
console.log(pelicula3);
console.log(pelicula4);