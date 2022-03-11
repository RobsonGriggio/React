export default class Categorias {
  constructor() {
    this.categorias = [];
  }

  criaCategoria(novaCategoria) {
    this.categorias.push(novaCategoria);
    console.log(this.categorias);
  }
}
