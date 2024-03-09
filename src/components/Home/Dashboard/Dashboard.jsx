import Header from '../Header/Header'
import Nav from '../Nav/Nav'
import './Dashboard.css'

function Dashboard() {

    return (
        <div>
            {/* <Header /> */}
            {/* <div><Nav/></div> */}
            <div className="dashboard">

                <div className="Kpi-pizza">


                    <div className="produtos-estoque">
                        <div className='container-azul'>
                            <div>Estoque</div>
                            <h1>83</h1>
                            <p>Produtos</p>
                        </div>
                        <div className='container-vermelho'>
                            <div>Produtos sem estoque</div>
                            <h1>15</h1>
                            <p>Produtos</p>
                        </div>
                    </div>
                    <div className="grafico-pizza">
                        <h2>Produtos Vendidos</h2>
                        <div>
                            <img src="./grafico-pizza.png" alt="Grafico de pizza" />
                        </div>
                    </div>
                </div>
                <div className='grafico-linhas'>
                    <div>
                        <img src="./graficos-linha.png" alt="Grafico de linhas" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
