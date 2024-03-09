import { useState, useEffect } from 'react';
import './Estoque.css';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import { getProduct } from '../../../firebase/firebase';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

function Estoque() {
    const [products, setProducts] = useState([]);
    const { user } = useAuth();
    
    const handleFetch = async () => {
        const uid = user.uid;
        try {
            const fetchedProducts = await getProduct(uid);
            setProducts(fetchedProducts);
        } catch (error) {
            alert(error.message);
        }
    };

    useEffect(() => {
        // Fetch products on component mount
        handleFetch();
    }, []);

    return (
        <div>
            <Nav />
            <Header />
            <div className="estoque">
                {/* <button onClick={handleFetch}> Fetch </button> */}

                <div className='cont2'>
                    <input id='search' type="text" placeholder='🔍 Pesquisar Produto' />
                    <select name="Categoria" id="select"></select>
                    <Link to={"/estoque/novo-produto"} className='btn-novo-produto'>
                        Novo Produto
                    </Link>
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
                            {/* <tr>
                                <th scope="row">1</th>
                                <td>Caneca de porcelana</td>
                                <td>Canecas</td>
                                <td>36</td>
                                <td>R$  40,90</td>
                                <td><a href=""><img src="../../../../public/price-tag.png" alt="" /></a></td>
                                <td><a href=""><img src="../../../../public/pencil_599294.png" alt="" /></a></td>
                            </tr> */}
                            {/* Map through products only if it's not undefined */}
                            {products && products.map((product, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 2}</th>
                                    <td>{product.name}</td>
                                    <td>{product.category}</td>
                                    <td>0</td>
                                    <td>R$ {product.price}</td>
                                    <td><a href=""><img src="./price-tag.png" alt="" /></a></td>
                                    <td><a href=""><img src="./pencil_599294.png" alt="" /></a></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Estoque;