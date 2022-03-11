export default class ArrayDeNotas {
  constructor() {
    this.notas = [];
  }

  adicionarNota(titulo, texto, categoria) {
    const novaNota = new Nota(titulo, texto, categoria);
    this.notas.push(novaNota);
    console.log(this.notas)
  }

  deletarNotas(index) {
    this.notas.splice(index, 1);
  }
}

class Nota {
  constructor(titulo, texto, categoria) {
    this.titulo = titulo;
    this.texto = texto;
    this.categoria = categoria;
  }
}
