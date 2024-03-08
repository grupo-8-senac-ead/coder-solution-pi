import { useState } from 'react'
import './Header.css'
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Header() {
  const { user, logOut } = useAuth();
  const navigate = useNavigate(); // Get the navigate function

  const handleLogout = () => {
    console.log("Logging out...");
    logOut(); // Call the logout function
    navigate('/');
  };

  return (
    <div className='header'>
      <h2>ESTOQUE</h2>
      <button onClick={() => handleLogout()}>
        <img src="../../../../public/do-utilizador.png" alt="user logo" />
      </button>
    </div>
  )
}

export default Header
