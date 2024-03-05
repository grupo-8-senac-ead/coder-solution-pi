import './HomePage.css';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import Main from './Main/Main';

export default function HomePage() {
  return (
    <div className='home-page'>
      <Header />
      <div className='content'>
        <Nav />
        <Main />
      </div>
    </div>
  );
}