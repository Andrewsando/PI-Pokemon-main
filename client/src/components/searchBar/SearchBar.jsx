import { useState } from "react";
import { getAll, getByName } from "../../redux/action";
import { connect } from "react-redux";
import style from "./SearchBar.module.css";

const SearchBar = ({ getByName, getAll }) => {
  const [name, setName] = useState("");
  const [filtered, setFiltered] = useState(false);

  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleReset = () => {
    getAll();
    setFiltered(false);
  };

  return (
    <div>
      <input
        className={style.searchBar}
        type="search"
        placeholder="Search Pokemons..."
        onChange={handleChange}
        value={name}
      ></input>
      <button
        className={style.button}
        onClick={() => {
          setName("");
          getByName(name);
          setFiltered(true);
        }}
      >
        {" "}
        Search Pokemon{" "}
      </button>

      {filtered && (
        <button className={style.button} onClick={handleReset}>
          {" "}
          Reset pokemons{" "}
        </button>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    allPokemons: state.allPokemons,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getByName: (name) => {
      dispatch(getByName(name));
    },
    getAll: () => {
      dispatch(getAll());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
