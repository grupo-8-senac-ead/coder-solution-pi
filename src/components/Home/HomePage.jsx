import './HomePage.css';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import Main from './Main/Main';
import NovoProduto from './Estoque/NovoProduto';

export default function HomePage() {
  return (
    <div className='home-page'>
      <Header />
      <div className='content'>
        <Nav />
        {/* <Main /> */}
        <NovoProduto />
      </div>
    </div>
  );
}