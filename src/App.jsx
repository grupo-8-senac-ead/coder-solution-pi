//import HomePage from './components/Home/HomePage'
import { AuthContextProvider } from "./context/AuthContext";
import './App.css'
import Estoque from './components/Home/Estoque/Estoque'
import Login from "./components/Auth/Login";
//import Dashboard from './components/Dashboard/Dashboard'
//import HomePage from './components/Home/HomePage'
//import NovoProduto from './components/Home/Estoque/NovoProduto/NovoProduto'


function App() {

  return (
    <AuthContextProvider>
      <div>
        {/* <Estoque />  */}
        {/* <HomePage/> */}
        <Login />
      </div>
    </AuthContextProvider>
  )
}

export default App
