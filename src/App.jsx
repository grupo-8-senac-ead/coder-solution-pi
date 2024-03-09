import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from "./context/AuthContext";
import './App.css'
import Estoque from './components/Home/Estoque/Estoque'
import Login from "./components/Auth/Login";
import HomePage from './components/Home/HomePage'
import NovoProduto from './components/Home/Estoque/NovoProduto/NovoProduto'
import Dashboard from './components/Home/Dashboard/Dashboard';

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter basename="/coder-solution-pi/">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/estoque" element={<Estoque />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/estoque/novo-produto" element={<NovoProduto />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;