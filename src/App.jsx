import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from "./context/AuthContext";
import './App.css'
import Estoque from './components/Home/Estoque/Estoque'
import Login from "./components/Auth/Login";
import HomePage from './components/Home/HomePage'

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/estoque" element={<Estoque />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;