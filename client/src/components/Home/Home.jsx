import { useEffect } from "react";
import { getAll } from "../../redux/action";
import { connect } from "react-redux";
import InitialCard from "../Card/InitialCard";

const Home = ({ getAll, allPokemons }) => {
  useEffect(() => {
    getAll();
  }, [getAll]);

  return (  
    <div>
      {allPokemons.map((pokemon) => (
        <InitialCard key={pokemon.name} pokemon={pokemon} />
      ))}
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
    getAll: () => {
      dispatch(getAll());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
