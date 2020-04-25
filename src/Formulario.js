import React, { Component } from 'react';

class Formulario extends Component {

    constructor(props) {
        super(props);

        this.stateInicial = {
            nome: '',
            livro: '',
            preco: '',

        }

        this.state = this.stateInicial;
    }

    render() {

        const { nome, livro, preco } = this.state;

        return (
            <form>

                <label htmlfor="nome">Nome</label>
                <input id="nome" type="text" name="nome" value={nome}></input>

                <label htmlfor="livro">Livro</label>
                <input id="livro" type="text" name="livro" value={livro}></input>

                <label htmlfor="preco">Preço</label>
                <input id="preco" type="text" name="preco" value={preco}></input>

                <button type="button">Salvar</button>
            </form>
        )

    }
}
export default Formulario;