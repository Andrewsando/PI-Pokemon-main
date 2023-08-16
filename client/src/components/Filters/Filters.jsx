import { useEffect, useState } from "react";
import styles from "./Filters.module.css";
import {
  filterOrigin,
  filterTypes,
  getAll,
  orderCards,
} from "../../redux/action";
import { connect } from "react-redux";
import axios from "axios";

const Filters = ({ filterOrigin, filterTypes, getAll, orderCards }) => {
  const [types, setTypes] = useState([]);
  const [order, setOrder] = useState("");
  const [filtered, setFiltered] = useState(false);

  useEffect(() => {
    const getTypes = async () => {
      const { data } = await axios("http://localhost:3001/pokemons/type");
      setTypes(data);
    };
    getTypes();
  }, []);

  const handleFilterTypes = (event) => {
    filterTypes(event.target.value);
    orderCards(order);
    setFiltered(true);
  };

  const handleReset = (e) => {
    setFiltered(false);
    setOrder("");
    getAll();
  };

  const handleFilterOrigin = (event) => {
    filterOrigin(event.target.value);
    orderCards(order);
    setFiltered(true);
  };
  const handleOrder = (event) => {
    orderCards(event.target.value);
    setOrder(event.target.value);
    setFiltered(true);
  };
  return (
    <form className={styles.filters} onReset={handleReset}>
      <select
        id="origin"
        className={styles.filter}
        onChange={handleFilterOrigin}
      >
        <option value="All" selected>
          All
        </option>
        <option value="Created">Created</option>
        <option value="Existing">Existing</option>
      </select>
      <select
        id="order"
        value={order}
        className={styles.filter}
        onChange={handleOrder}
      >
        <option value="Choose order" selected>
          {" "}
          Choose order{" "}
        </option>
        <option value="A">Ascendent</option>
        <option value="D">Descendant</option>
        <option value="Max">Max Attack</option>
        <option value="Min">Min Attack</option>
      </select>
      <select id="types" className={styles.filter} onChange={handleFilterTypes}>
        <option value="Select" selected>
          Select Types
        </option>
        {types.map((e, i) => (
          <option key={i} value={e.name}>
            {e.name}
          </option>
        ))}
      </select>
      {filtered && (
        <input type="reset" className={styles.button} value="reset" />
      )}
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAll: () => {
      dispatch(getAll());
    },
    filterTypes: (types) => {
      dispatch(filterTypes(types));
    },
    filterOrigin: (origin) => {
      dispatch(filterOrigin(origin));
    },
    orderCards: (origin) => {
      dispatch(orderCards(origin));
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

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
