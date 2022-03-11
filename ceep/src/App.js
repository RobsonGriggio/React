import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/index.css";
import "./assets/App.css";
import Categorias from "./dados/Categorias.js";
import ArrayDeNotas from "./dados/Notas.js";

class App extends Component {
  constructor() {
    super();

    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          categoria={this.categorias.categorias}
          criaNota={this.notas.adicionarNota.bind(this.notas)}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            criaCategoria={this.categorias.criaCategoria.bind(this.categorias)}
            categoria={this.categorias.categorias}
          />
          <ListaDeNotas
            apagarNota={this.notas.deletarNotas.bind(this.notas)}
            nota={this.notas.notas}
          />
        </main>
      </section>
    );
  }
}

export default App;
