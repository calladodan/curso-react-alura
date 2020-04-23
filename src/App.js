import React, { Component } from 'react';
import './App.css';
import Tabela from './Tabela';

class App extends Component {

  state = {
    autores:  [
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


  removeAutor = index =>{
    
    const { autores } = this.state;

    this.setState(
      {
      autores : autores.filter((autor, posAtual) =>{
        return posAtual !== index;
      }),
    });
  }

  render(){
    return (
      <div className="App">
        <Tabela autores = {this.state.autores} removeAutor = {this.removeAutor}/>
      </div>
    );
  }
  
}

export default App;
