
class Libro {
    public ISBN: number;
    public Titulo: string;
    public Autor: string;
    public NumPags: number;

    constructor(newISBN:number, newTitulo:string, newAutor:string, newNumPags: number){
        this.ISBN = newISBN;
        this.Titulo = newTitulo;
        this.Autor = newAutor;
        this.NumPags = newNumPags;
    }

    getISBN(): number {
        return this.ISBN;
    }
    
    getTitulo(): string {
        return this.Titulo;
    }
    getAutor(): string {
        return this.Autor;
    }
    getNumPags(): number {
        return this.NumPags;
    }

    setISBN(newISBN: number): void {
        this.ISBN = newISBN;
    }

    setTitulo(newTitulo: string): void {
        this.Titulo = newTitulo;
    }

    setAutor(newAutor: string): void {
        this.Autor = newAutor;
    }

    setNumPags(newNumPags: number): void {
        this.NumPags = newNumPags;
    }

    toString(): void {
        console.log("El libro "+this.Titulo+" con ISBN:"+this.ISBN+" creado por el autor: "+this.Autor+" contiene: "+this.NumPags+" de paginas.")
    }

}
const libro1 = new Libro(9788498387087, "Cien años de soledad", "Gabriel García Márquez", 432);
const libro2 = new Libro(9780140282551, "To Kill a Mockingbird", "Harper Lee", 336);

libro1.toString();
libro2.toString();

if(libro1.NumPags > libro2.NumPags){
    console.log("El libro "+libro1.Titulo+" tiene "+(libro1.NumPags - libro2.NumPags)+" mas paginas.");
}else{
    console.log("El libro "+libro1.Titulo+" tiene "+(libro2.NumPags - libro1.NumPags)+" mas paginas.");
}