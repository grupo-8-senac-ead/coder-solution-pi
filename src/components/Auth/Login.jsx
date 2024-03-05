import './Login.css'

function Login() {

  return (
    <div className="login">
      <img src="/public/CODERLOGO.png" alt="logo coder solution" />
      <div className="login-container">
        <form>
          <h1>Login</h1>
          <div className="login-input">
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder='Digite seu email' />
            </div>
            <div className="input-field password">
              <label htmlFor="password">Senha</label>
              <input type="password" id="password" placeholder='Digite sua senha'/>
            </div>
          </div>
          <div className='button-login'>
            <button type="submit">Entrar</button>
          </div>
          <div className="signup-link">
            <div className='linha'></div>
            <p>Esqueceu sua senha ? <a>Clique aqui</a></p>
            <span>Quem Somos?</span>
            <img src="/public/CODERLOGO.png" alt="logo coder solution" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
