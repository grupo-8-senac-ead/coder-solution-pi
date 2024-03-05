//import { useState } from 'react'
import './Estoque.css'
import Nav from '../Nav/Nav'
import Header from '../Header/Header'

function Estoque() {

    return (
        <div>
            <Nav />
            <Header />
            <div className="estoque">
               
                    <div className='cont1'>
                        <div className="container-azul">
                            <div className='contazul' >Total Estoque</div>
                            <div id="total">
                                <h1>85</h1>
                                <p>Produtos</p>
                            </div>
                        </div>
                        <div className="container-vermelho">
                            <div className="contvermelho">Estoque</div>
                            <div id="totalvermelho">
                                <h1>15</h1>
                                <p>Produtos</p>
                            </div>
                        </div>
                        <button> Novo Produto</button>
                    </div>
                    <div className='cont2'>
                        <input id='search' type="text" placeholder='🔍 Pesquisar Produto' />
                        <select name="Categoria" id="select"></select>
                    </div>
                <div className='cont3'>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Cód</th>
                                <th scope="col">Produto</th>
                                <th scope="col">Categoria</th>
                                <th scope="col">Estoque</th>
                                <th scope="col">Preço</th>
                                <th scope="col">Editar</th>
                                <th scope="col">Precificar</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Caneca de porcelana</td>
                                <td>Canecas</td>
                                <td>36</td>
                                <td>R$  40,90</td>
                                <td><a href=""><img src="../../../../public/price-tag.png" alt="" /></a></td>
                                <td><a href=""><img src="../../../../public/pencil_599294.png" alt="" /></a></td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Estoque
