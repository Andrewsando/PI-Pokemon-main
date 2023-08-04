import { NavLink } from "react-router-dom";

const InitialCard = ({ pokemon: { id, name, image, types } }) => {
  return (
    <div>
      <NavLink to={`/pokemons/${id}`}>
        <h2>{name}</h2>
      </NavLink>
      <img src={image} alt="pokeImage" />
      <h1>{id}</h1>

      {types && types.map((elemento) => (
        <h1 key={elemento.type.name}>{elemento.type.name}</h1>
    
      ))}
    </div>
  );
};

export default InitialCard;
