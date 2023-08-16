import { useEffect, useState } from "react";
import DetailedCard from "../Card/DetailedCard/DetailedCard";
import { useParams } from "react-router-dom";
import axios from "axios";
import Error from "../Errors/Error";
import styles from './Detail.module.css'

const Detail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(undefined);


  useEffect(() => {
    if(id){

    axios(`http://localhost:3001/pokemons/${id}`).then(({ data }) => {

      if (data.name) {
        setPokemon(data);
      }    
    });
  }
}, [id]);


  return (
    <div className={styles.all}>
       {console.log(pokemon)}
      { pokemon ? (
        
        <DetailedCard pokemon={pokemon} key={pokemon.name}
        />
      ) : (
        <Error />
      )}
    </div>
  );
};

export default Detail;
