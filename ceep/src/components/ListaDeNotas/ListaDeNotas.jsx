import React from "react";
import { Component } from "react";
import CardNota from "../CardNota";
import "./style.css";

class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {this.props.nota.map((nota, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota
                titulo={nota.titulo}
                texto={nota.texto}
                apagarNota={this.props.apagarNota}
                indice={index}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
