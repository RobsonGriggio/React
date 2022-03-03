import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/index.css";
import "./assets/App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      nota: [],
      categoria:[],
    };
  }
  criaNota(titulo, texto) {
    const novaNota = { titulo, texto };
    const novoArrayNota = [...this.state.nota, novaNota];
    const novoState = {
      nota: novoArrayNota,
    };
    this.setState(novoState);
  }

  deletarNota(index) {
    let arrayNota = this.state.nota;
    arrayNota.splice(index, 1);
    this.setState({ nota: arrayNota });
  }

  criaCategoria(nome){
    const novoArrayCategoria = [...this.state.categoria, nome]
    const novoState = {
      categoria: novoArrayCategoria,
    }

    this.setState(novoState)
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criaNota={this.criaNota.bind(this)} />
        <main className="conteudo-principal">
          <ListaDeCategorias criaCategoria={this.criaCategoria.bind(this)}/>
          <ListaDeNotas
            apagarNota={this.deletarNota.bind(this)}
            nota={this.state.nota}
          />
        </main>
      </section>
    );
  }
}

export default App;
