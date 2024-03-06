import { useState } from 'react';
import './NovoProduto.css';
import { addProduct } from '../../../../firebase/firebase';

export default function NovoProduto() {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [supplier, setSupplier] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const uid = 'Ft1czpxk8TP3HEUU3bd5WxZPjKL2';

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
        <div className='novo-produto'>
            <h1>Novo Produto</h1>
            <div className="input-container">
                <input 
                    type="text" 
                    placeholder='Nome do produto'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder='Categoria'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder='Fornecedor'
                    value={supplier}
                    onChange={(e) => setSupplier(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder='URL da imagem'
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
                <textarea 
                    placeholder='Descrição'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input 
                    type="number" 
                    placeholder='Preço do Produto'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
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
    );
}
