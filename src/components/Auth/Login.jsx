// Login.jsx
import { useState } from 'react';
import { createUser } from '../../firebase/firebase';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Get the navigate function

  const { logIn } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      // Navigate to the homepage after successful login
      navigate('/home');
    } catch (error) {
      setError(error.message);
    }
  };
  
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUser(email, password);
      alert('Account created successfully!');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login">
      <img src="./CODERLOGO.png" alt="logo coder solution" />
      <div className="login-container">
        <form>
          <h1>Login</h1>
          {error && <div className="error">{error}</div>}
          <div className="login-input">
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder='Digite seu email'
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update email state
              />
            </div>
            <div className="input-field password">
              <label htmlFor="password">Senha</label>
              <input 
                type="password" 
                id="password" 
                placeholder='Digite sua senha'
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update password state
              />
            </div>
          </div>
          <div className='button-container'>
            <button
              type="button"  // Ensure this is set to prevent form submission
              className='button-login'
              onClick={handleLogin} // Pass the function directly without invoking it
            >
              Entrar
            </button>
            <button
              type="button"  // Ensure this is set to prevent form submission
              className='button-signup'
              onClick={handleSignup} // Pass the function directly without invoking it
            >
              Cadastrar
            </button>
          </div>
          <div className="signup-link">
            <div className='linha'></div>
            <p>Esqueceu sua senha ? <a>Clique aqui</a></p>
            <span>Quem Somos?</span>
            <img src="./CODERLOGO.png" alt="logo coder solution" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;
