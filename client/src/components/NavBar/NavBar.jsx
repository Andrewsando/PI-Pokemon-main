import { NavLink, useLocation } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";

const NavBar = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/form" && location.pathname !== "/" ? (
        <>
          <button>
            <NavLink to="/form">Create your Pokemon</NavLink>
          </button>
          <SearchBar />
        </>
      ) : null}
    {location.pathname !== "/pokemons" && location.pathname !== "/" ? (
      <button>
      <NavLink to="/pokemons">Home</NavLink></button>):null}
    </div>
  );
};

export default NavBar;
