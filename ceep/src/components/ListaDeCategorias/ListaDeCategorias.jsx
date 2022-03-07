import React, { Component } from "react";
import "./style.css";

class ListaDeCategorias extends Component {
  _handleCategoria(evento) {
    if (evento.key === "Enter") {
      let valorCategoria = evento.target.value;
      this.props.criaCategoria(valorCategoria);
    }
  }

  render() {
    return (
      <>
        <h2 className="subtitulo">Categorias</h2>
        <section className="lista-categorias">
          <ul className="lista-categorias_lista">
            {this.props.categoria.map((categoria, index) => {
              return (
                <li key={index} className="lista-categorias_item">
                  {categoria}
                </li>
              );
            })}
          </ul>
          <input
            type="text"
            placeholder="Adicionar Categoria"
            onKeyUp={this._handleCategoria.bind(this)}
            className="lista-categorias-botao"
          />
        </section>
      </>
    );
  }
}

export default ListaDeCategorias;
