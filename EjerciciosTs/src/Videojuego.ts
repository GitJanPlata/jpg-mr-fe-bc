class Videojuego implements Entregable {
  private titulo: string;
  private horasEstimadas: number;
  private entregado: boolean;
  private genero: string;
  private compañia: string;

  constructor(titulo: string, horasEstimadas: number, genero: string, compañia: string) {
    this.titulo = titulo;
    this.horasEstimadas = horasEstimadas || 10;
    this.entregado = false;
    this.genero = genero || "";
    this.compañia = compañia || "";
  }

  entregar(): void {
    this.entregado = true;
  }

  devolver(): void {
    this.entregado = false;
  }

  isEntregado(): boolean {
    return this.entregado;
  }

  compareTo(a: Object): number {
    if (a instanceof Videojuego) {
      const videojuego = a as Videojuego;
      if (this.horasEstimadas > videojuego.horasEstimadas) {
        return 1;
      } else if (this.horasEstimadas < videojuego.horasEstimadas) {
        return -1;
      } else {
        return 0;
      }
    } else {
      throw new Error("El objeto no es una instancia de Videojuego.");
    }
  }


    // Métodos get
    getTitulo(): string {
    return this.titulo;
    }

    getHorasEstimadas(): number {
    return this.horasEstimadas;
    }

    getGenero(): string {
    return this.genero;
    }

    getCompañia(): string {
    return this.compañia;
    }

    
    // Métodos set
    setTitulo(titulo: string): void {
    this.titulo = titulo;
    }

    setHorasEstimadas(horasEstimadas: number): void {
    this.horasEstimadas = horasEstimadas;
    }

    setGenero(genero: string): void {
    this.genero = genero;
    }

    setCompañia(compañia: string): void {
    this.compañia = compañia;
    }

    // Método toString
    toString(): string {
    return `Título: ${this.titulo}\nHoras estimadas: ${this.horasEstimadas}\nEntregado: ${this.entregado}\nGénero: ${this.genero}\nCompañía: ${this.compañia}`;
    }

  }