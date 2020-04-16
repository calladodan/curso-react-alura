import React, { Component } from "react";

class Tabela extends Component {

    render() {
        return (<table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Produto</th>
                    <th>Preço</th>
                    <th>Remover</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Daniel</td>
                    <td>React</td>
                    <td>10</td>
                    <td><button>Remover</button></td>
                </tr>
                <tr>
                    <td>Pablo</td>
                    <td>Java</td>
                    <td>20</td>
                    <td><button>Remover</button></td>
                </tr>
                <tr>
                    <td>Paulo</td>
                    <td>Horroroso</td>
                    <td>1000</td>
                    <td><button>Remover</button></td>
                </tr>
            </tbody>
        </table>
        );
    }
}
export default Tabela;