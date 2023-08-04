import { useEffect, useState } from "react";
import DetailedCard from "../Card/DetailedCard";
import { useParams } from "react-router-dom";
import axios from "axios";
import Error from "../Errors/Error";

const Detail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(undefined);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios(`http://localhost:3001/pokemons/${id}`).then(({ data }) => {
      setLoading(false);
      console.log("data", data);

      if (data.name) {
        setPokemon(data);
      }
    });
  }, [id]);

  return (
    <div>
      { pokemon ? (
        <DetailedCard pokemon={pokemon} key={pokemon.id} />
      ) : (
        <Error />
      )}
    </div>
  );
};

export default Detail;
