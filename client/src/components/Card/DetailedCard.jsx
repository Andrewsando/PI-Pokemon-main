const DetailedCard = ({
  pokemon: {
    id,
    name,
    image,
    types,
    life,
    attack,
    defense,
    speed,
    height,
    weight,
  },
}) => {
  console.log("types", types);
  return (
    <div>
      <h1>Name: {name}</h1>
      <img src={image} alt="pokeImage" />
      <h2>Life :{life}</h2>
      <h2>Attack: {attack}</h2>
      <h2>Defense: {defense}</h2>
      <h2>Speed: {speed}</h2>
      <h2>Height:{height}</h2>
      <h2>Weight: {weight}</h2>
      {types.map((elemento) => (
        <h2 key={elemento.type.name}>Type: {elemento.type.name}</h2>
      ))}
    </div>
  );
};

export default DetailedCard;
