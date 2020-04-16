import React from 'react';
import './App.css';
import Tabela from './Tabela';

function App() {

  const  autores =  [
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
  ];

  return (
    <div className="App">
      <Tabela autores = {autores} />
    </div>
  );
}

export default App;
