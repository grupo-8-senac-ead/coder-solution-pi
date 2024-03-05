import './Nav.css';

function Nav() {
  return (
    <nav className='navigation'>
      <h3>menu</h3>
        <div className='menu-option'>
          <img src="./dashboard-logo.png" alt="dashboard-logo" />
          <p>Dasboard</p>
        </div>
        <div className='menu-option'>
          <img src="./estoque-logo.png" alt="estoque-logo" />
          <p>Estoque</p>
        </div>
        <div className='menu-option'>
          <img src="./precificacao-logo.png" alt="precificacao-logo" />
          <p>Precificação</p>
        </div>
        <div className='menu-option'>
          <img src="./pdv-logo.png" alt="pdv-logo" />
          <p>PDV</p>
        </div>
        <div className='menu-option'>
          <img src="./configuracao-logo.png" alt="configuracao-logo" />
          <p>Configuração</p>
        </div>
      <img src="coderso-logo.png" alt="Coderso Logo" className='nav-logo'/>
    </nav>
  );
}

export default Nav;