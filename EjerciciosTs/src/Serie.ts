
// Constructor
class Serie {
  private titulo: string;
  private numeroTemporadas: number;
  private entregado: boolean;
  private genero: string;
  private creador: string;

  constructor(titulo: string, creador: string) {
    this.titulo = titulo;
    this.numeroTemporadas = 3;
    this.entregado = false;
    this.genero = "";
    this.creador = creador;
  }

  // Getters
  getTitulo(): string {
    return this.titulo;
  }

  getNumeroTemporadas(): number {
    return this.numeroTemporadas;
  }

  getGenero(): string {
    return this.genero;
  }

  getCreador(): string {
    return this.creador;
  }

  // Setters
  setTitulo(titulo: string): void {
    this.titulo = titulo;
  }

  setNumeroTemporadas(numeroTemporadas: number): void {
    this.numeroTemporadas = numeroTemporadas;
  }

  setGenero(genero: string): void {
    this.genero = genero;
  }

  setCreador(creador: string): void {
    this.creador = creador;
  }

  toString(): string {
    return `Título: ${this.titulo}
    \nNúmero de temporadas: ${this.numeroTemporadas}
    \nEntregado: ${this.entregado}
    \nGénero: ${this.genero}
    \nCreador: ${this.creador}`;
  }
}

