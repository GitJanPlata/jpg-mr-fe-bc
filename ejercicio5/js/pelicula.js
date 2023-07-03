var Pelicula = /** @class */ (function () {
    function Pelicula(titulo, duracion, edadMinima, director) {
        this.titulo = titulo;
        this.duracion = duracion;
        this.edadMinima = edadMinima;
        this.director = director;
    }
    return Pelicula;
}());
var pelicula1 = new Pelicula("The Shawshank Redemption", 142, 18, "Frank Darabont");
var pelicula2 = new Pelicula("The Godfather", 175, 18, "Francis Ford Coppola");
var pelicula3 = new Pelicula("Pulp Fiction", 154, 18, "Quentin Tarantino");
var pelicula4 = new Pelicula("The Dark Knight", 152, 13, "Christopher Nolan");
console.log(pelicula1);
console.log(pelicula2);
console.log(pelicula3);
console.log(pelicula4);
