import React from "react";
import { Component } from "react";
import "./style.css";

class FormularioCadastro extends Component {
  constructor() {
    super();
    this.titulo = "";
    this.texto = "";
    this.categoria = "Sem categoria";
  }

  _handleTrocaTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  _handleTrocaTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
  }

  _criaNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criaNota(this.titulo, this.texto, this.categoria);
  }

  _handleTrocaCategoria(evento){
    evento.stopPropagation();
    this.categoria = evento.target.value;

  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._criaNota.bind(this)}>
        <select onChange={this._handleTrocaCategoria.bind(this)}className="form-cadastro-select">
          <option>Sem categoria</option>
          {this.props.categoria.map((categoria, index) => {
            return <option key={index}>{categoria}</option>;
          })}
        </select>
        <input
          type="text"
          placeholder="Titulo"
          className="form-cadastro_input "
          onChange={this._handleTrocaTitulo.bind(this)}
        />
        <textarea
          placeholder="Escreva sua nota..."
          rows={15}
          className="form-cadastro_input "
          onChange={this._handleTrocaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
