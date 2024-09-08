import { useState } from 'react';
import './NovoProduto.css';
import { addProduct } from '../../../firebase/firebase';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import { useAuth } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function NovoProduto() {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [supplier, setSupplier] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const { user } = useAuth();
    const uid = user.uid;
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Here you would handle submitting the form data to the database
            // For now, we'll just log the form data
            console.log({ name, category, supplier, image, description, price });
            addProduct(uid, name, category, supplier, image, description, price)
            alert('Product added successfully!');
            // Optionally, you can reset the form after successful submission
            // resetForm();
            navigate('/estoque');
        } catch (error) {
            alert(error.message);
        }
    };

    const resetForm = () => {
        setName('');
        setCategory('');
        setSupplier('');
        setImage('');
        setDescription('');
        setPrice(0)
    };

    return (
        <div className="main">
            <Header />
            <Nav />

            <div className="content">

                <div className='novo-produto'>
                    <h1>Novo Produto</h1>
                    <div className="input-container">
                        <div className="container-1">
                            <div className="nome Produto">
                                <label>Nome do Produto</label>
                                <input className='name'
                                    type="text"
                                    placeholder='Digite o nome do produto'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="categoria Produto">
                                <label>Categoria </label>
                                <input className='category'
                                    type="text"
                                    placeholder='Digite a categoria'
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                />
                            </div>
                            <div className="preco Produto">
                                <label>Preço</label>
                                <input className='price'
                                    type="number"
                                    placeholder='Digite o reço do Produto'
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="container-1">
                            <div className="fornecedor Produto">
                                <label>Fornecedor</label>
                                <input className='supplier'
                                    type="text"
                                    placeholder='Digite o fornecedor'
                                    value={supplier}
                                    onChange={(e) => setSupplier(e.target.value)}
                                />
                            </div>
                            <div className="imagem Produto">
                                <label>Imagem</label>
                                <input className='image'
                                    type="text"
                                    placeholder='URL da imagem'
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="Descricao Produto">
                            <label>Decrição do Produto</label>
                            <textarea className='description'
                                placeholder='Descreva o produto'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>

                    </div>
                    <div className='button-container'>
                        <button
                            type="button"
                            className='button-clear'
                            onClick={resetForm} // Call resetForm function to clear inputs
                        >
                            Limpar
                        </button>
                        <button
                            type="button"
                            className='button-add'
                            onClick={handleSubmit} // Call handleSubmit function to submit form
                        >
                            Adicionar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
