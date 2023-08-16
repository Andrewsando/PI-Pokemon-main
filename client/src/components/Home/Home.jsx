import { useEffect } from "react";
import { getAll } from "../../redux/action";
import { connect } from "react-redux";
import InitialCard from "../Card/InitialCard/InitialCard";
import Paginate from "../Paginate/Paginate";
import styles from "./Home.module.css";
import Filters from "../Filters/Filters";

const Home = ({ getAll, filteredPokemons, numPage }) => {
  useEffect(() => {
    getAll();
  }, [getAll]);

  const pokemonPerPage = 12;
  let from = (numPage - 1) * pokemonPerPage;
  let until = numPage * pokemonPerPage;
  let cantPage = Math.floor(filteredPokemons.length / pokemonPerPage);
  const viewCharacters = filteredPokemons?.slice(from, until);

  return (
    <div
      className={`${styles.color} ${
        viewCharacters.length === 0 && styles.allNoOne
      }`}
    >
      <Filters />
      {viewCharacters.length > 0 && (
        <h1 className={styles.text}>
          Click on their name to see the detailed information!
        </h1>
      )}
      {viewCharacters.length ? (
        <div className={styles.container}>
          {viewCharacters.map((pokemon) => (
            <InitialCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      ) : (
        <div className={styles.allNoOne}>
          <div className={styles.none}>There's no one!</div>
          <img className={styles.gif} src="/gastly.gif" alt="animated" />
        </div>
      )}
      <div>
        <Paginate numPage={numPage} cantPage={cantPage} />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAll: () => {
      dispatch(getAll());
    },
  };
};

const mapStateToProps = (state) => {
  return {
    allPokemons: state.allPokemons,
    numPage: state.numPage,
    filteredPokemons: state.filteredPokemons,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
