import Login from "./components/Login/Login.jsx";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";
import Home from "./components/Home/Home.jsx";
import Detail from "./components/Detail/Detail.jsx";
import AddPokemon from "./components/Form/AddPokemon.jsx";
import styles from './App.module.css'


function App() {
  const navigate = useNavigate();
  const location = useLocation()

  function access() {
    navigate("/pokemons");
  }
  return (
    <div className={styles.App}>
          {location.pathname !== "/"
           ? (<NavBar/>)
           : null}
        <Routes>
          <Route path="/" element={<Login access={access} />} />
          <Route path="/pokemons" element={<Home/>} />
          <Route path="/pokemons/:id" element={<Detail/>} />
          <Route path="/form" element={<AddPokemon/>} />
          
        </Routes>
    </div>
  );
}

export default App;
