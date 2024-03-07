import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className='navigation'>
      <h3>menu</h3>
        <Link className='menu-option' to={"/dashboard"}>
          <img src="./dashboard-logo.png" alt="dashboard-logo" />
          <p>Dasboard</p>
        </Link>
        <Link className='menu-option' to={"/estoque"}>
          <img src="./estoque-logo.png" alt="estoque-logo" />
          <p>Estoque</p>
        </Link>
        <Link className='menu-option'>
          <img src="./precificacao-logo.png" alt="precificacao-logo" />
          <p>Precificação</p>
        </Link>
        <Link className='menu-option'>
          <img src="./pdv-logo.png" alt="pdv-logo" />
          <p>PDV</p>
        </Link>
        <Link className='menu-option'>
          <img src="./configuracao-logo.png" alt="configuracao-logo" />
          <p>Configuração</p>
        </Link>
      <img src="coderso-logo.png" alt="Coderso Logo" className='nav-logo'/>
    </nav>
  );
}

export default Nav;