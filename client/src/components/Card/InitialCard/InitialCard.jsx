import { NavLink } from "react-router-dom";
import style from "./InitialCard.module.css";

const InitialCard = ({ pokemon: { id, name, image, Types } }) => {
  return (
    <div className={style.card}>
      <NavLink className={style.link} to={`/pokemons/${id}`}>
        <h2 className={style.name}>{name}</h2>

        {!image ? (
          <img
            src="/interrogacion.png"
            className={style.img}
            alt="Interrogation"
          />
        ) : (
          <img className={style.img} src={image} alt="pokeImage" />
        )}
      </NavLink>
      <div className={style.types}>
        {Types &&
          Types.map((elemento) => (
            <h1 key={elemento.name}>Type: {elemento.name}</h1>
          ))}
      </div>
    </div>
  );
};

export default InitialCard;
