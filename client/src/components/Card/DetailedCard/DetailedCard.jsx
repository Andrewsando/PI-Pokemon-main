import styles from "./DetailedCard.module.css";

const DetailedCard = ({
  pokemon: { name, image, Types, life, attack, defense, speed, height, weight },
}) => {
  return (
    <div className={styles.all}>
      <div className={styles.gifSpace}>
        <img src="/Team.gif" className={styles.gif} alt="team"></img>
      </div>
      <div className={styles.container}>
        <h1 className={styles.name}> {name}</h1>
        <div className={styles.card}>
          <div className={styles.image}>
            <img className={styles.img} src={image} alt="pokeImage" />
            <div className={styles.content}>
              <h2>Life: {life}</h2>
              <h2>Attack: {attack}</h2>
              <h2>Defense: {defense}</h2>
              <h2>Speed: {speed}</h2>
              <h2>Height: {height}</h2>
              <h2>Weight: {weight}</h2>
              {Types &&
                Types.map((element) => (
                  <h2 className={styles.letters} key={element.name}>
                    Type: {element.name}
                  </h2>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedCard;
