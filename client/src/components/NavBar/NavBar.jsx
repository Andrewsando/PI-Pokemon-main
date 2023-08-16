import { NavLink, useLocation } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import style from "./NavBar.module.css";

const NavBar = () => {
  const location = useLocation();

  return (
    <div className={style.navBar}>
      {location.pathname !== "/pokemons" &&location.pathname !== "/" 
          ? (
            <button className={style.button}>
              <NavLink className={style.textButton} to="/pokemons">
                Home
              </NavLink>
            </button>
          ) : null}

{location.pathname !== "/form" 
          ? (
          <button className={style.button}>
            <NavLink className={style.textButton} to="/form">
              Create your Pokemon
            </NavLink>
          </button>)
          : null}

          <img src="/title.png" alt="title"></img>
          {location.pathname === "/pokemons" 
          ? (<SearchBar />)
          : null}


      <button className={style.button}>
        <NavLink className={style.textButton} to="/">
          Log Out
        </NavLink>
      </button>
    </div>
  );
};

export default NavBar;
