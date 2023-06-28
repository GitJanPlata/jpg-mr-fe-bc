"use strict";
class Libro {
    constructor(newISBN, newTitulo, newAutor, newNumPags) {
        this.ISBN = newISBN;
        this.Titulo = newTitulo;
        this.Autor = newAutor;
        this.NumPags = newNumPags;
    }
    getISBN() {
        return this.ISBN;
    }
    getTitulo() {
        return this.Titulo;
    }
    getAutor() {
        return this.Autor;
    }
    getNumPags() {
        return this.NumPags;
    }
    setISBN(newISBN) {
        this.ISBN = newISBN;
    }
    setTitulo(newTitulo) {
        this.Titulo = newTitulo;
    }
    setAutor(newAutor) {
        this.Autor = newAutor;
    }
    setNumPags(newNumPags) {
        this.NumPags = newNumPags;
    }
    toString() {
        console.log("El libro " + this.Titulo + " con ISBN:" + this.ISBN + " creado por el autor: " + this.Autor + " contiene: " + this.NumPags + " de paginas.");
    }
}
const libro1 = new Libro(9788498387087, "Cien años de soledad", "Gabriel García Márquez", 432);
const libro2 = new Libro(9780140282551, "To Kill a Mockingbird", "Harper Lee", 336);
libro1.toString();
libro2.toString();
if (libro1.NumPags > libro2.NumPags) {
    console.log("El libro " + libro1.Titulo + " tiene " + (libro1.NumPags - libro2.NumPags) + " mas paginas.");
}
else {
    console.log("El libro " + libro1.Titulo + " tiene " + (libro2.NumPags - libro1.NumPags) + " mas paginas.");
}
