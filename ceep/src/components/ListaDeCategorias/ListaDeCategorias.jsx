import React, { Component } from "react";
import "./style.css";

class ListaDeCategorias extends Component {
  constructor() {
    super();

    this.categoria = "";
  }

  _handleCategoria(evento) {
    if (evento.key === "Enter") {
      this.categoria = evento.target.value;
    }
  }

  _criaCategoria(){
    this.props.criaCategoria(this.categoria)
  }

  render() {
    return (
      <section>
        <ul>
          <li>Categorias</li>
          <li>Categorias</li>
          <li>Categorias</li>
          <li>Categorias</li>
        </ul>
        <input
          type="text"
          placeholder="Adicionar Categoria"
          onKeyUp={this._handleCategoria().bind(this)}
        />
      </section>
    );
  }
}

export default ListaDeCategorias;
