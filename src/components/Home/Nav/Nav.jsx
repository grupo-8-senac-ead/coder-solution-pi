import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className='navigation'>
      <h3>menu</h3>
        <Link className='menu-option' to={"/home"}>
          <img src="./dashboard-logo.png" alt="dashboard-logo" />
          <p>Dasboard</p>
        </Link>
        <Link className='menu-option' to={"/estoque"}>
          <img src="./estoque-logo.png" alt="estoque-logo" />
          <p>Estoque</p>
        </Link>
      <img src="./coderso-logo.png" alt="Coderso Logo" className='nav-logo'/>
    </nav>
  );
}

export default Nav;