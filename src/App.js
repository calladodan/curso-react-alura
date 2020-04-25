import React, { Component, Fragment } from 'react';
import './App.css';
import Tabela from './Tabela';
import Form from './Formulario';

class App extends Component {

  state = {
    autores: [
      {
        nome: 'Daniel',
        livro: 'React',
        preco: '1000'
      },
      {
        nome: 'Pablo',
        livro: 'Java',
        preco: '99'
      },
      {
        nome: 'Deds',
        livro: 'Design',
        preco: '150'
      },
      {
        nome: 'Paulo',
        livro: 'CS',
        preco: '100'
      }
    ],
  };


  removeAutor = index => {

    const { autores } = this.state;

    this.setState(
      {
        autores: autores.filter((autor, posAtual) => {
          return posAtual !== index;
        }),
      });
  }

  escutadorDeSubmit = autor => {
    this.setState({ autores:[...this.state.autores, autor] })
  }

  render() {
    return (
      <Fragment>
        <Tabela autores={this.state.autores} removeAutor={this.removeAutor} />
        <Form escutadorDeSubmit={this.escutadorDeSubmit} />
      </Fragment>
    );
  }

}

export default App;
