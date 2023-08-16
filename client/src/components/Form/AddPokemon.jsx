import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { postOnDB } from "../../redux/action";
import axios from "axios";
import styles from "./AddPokemon.module.css";
import validations from "../../validations";
import { useNavigate } from "react-router-dom";

const AddPokemon = ({ postOnDB }) => {
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);

  //name
  const [name, setName] = useState("");
  const handleNameChange = (event) => {
    setName(event.target.value);
    setErrors(validations(event.target.value));
  };
  //img
  const [img, setImg] = useState("");
  const handleImgChange = (event) => {
    setImg(event.target.value);
  };
  //life
  const [life, setLife] = useState(50);
  const handleLifeChange = (event) => {
    setLife(event.target.value);
  };
  //Attack
  const [attack, setAttack] = useState(50);
  const handleAttackChange = (event) => {
    setAttack(event.target.value);
  };
  //Defense
  const [defense, setDefense] = useState(50);
  const handleDefenseChange = (event) => {
    setDefense(event.target.value);
  };
  //Speed
  const [speed, setSpeed] = useState(50);
  const handleSpeedChange = (event) => {
    setSpeed(event.target.value);
  };
  //Height
  const [height, setHeight] = useState(50);
  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };
  //Weight
  const [weight, setWeight] = useState(50);
  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };
  //Types
  const [types, setTypes] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);

  useEffect(() => {
    const getTypes = async () => {
      const { data } = await axios("http://localhost:3001/pokemons/type");
      setTypes(data);
    };

    getTypes();
  }, []);

  const handleType = (type) => {
    selectedTypes.find((element) => element === type)
      ? setSelectedTypes(selectedTypes.filter((e) => e !== type))
      : setSelectedTypes((prev) => [...prev, type]);
  };

  const sendFunction = (event) => {
    event.preventDefault();
    setDone(true);
    try {
      let parse = {
        name: name,
        image: img,
        life: life,
        attack: attack,
        defense: defense,
        speed: speed,
        height: height,
        weight: weight,
        types: selectedTypes.map((t) => t.id),
      };

      postOnDB(parse);
    } catch (e) {
      return e.message;
    }
  };
  const navigate = useNavigate();

  const HandleNavigation = () => {
    navigate("/pokemons");
  };

  return (
    <div className={styles.background}>
      <h1 className={styles.title}>Let's create your own Pokemon!!</h1>
      <div className={styles.all}>
        <div className={styles.firstPath}>
          <div className={styles.card}>
            <h2 className={styles.name}> {name}</h2>
            {!img ? (
              <img
                className={styles.img}
                src="./Interrogacion.png"
                alt="pokeimage"
              ></img>
            ) : (
              <img className={styles.img} src={img} alt="pokeimage"></img>
            )}
            <div className={styles.position}>
              <h2>life: {life}</h2>
              <h2>attack: {attack}</h2>
              <h2>defense: {defense}</h2>
              <h2>speed: {speed}</h2>
              <h2>height: {height}</h2>
              <h2>weight: {weight}</h2>
              <h2 className={styles.gridSpan}>
                types: {selectedTypes.map((t) => t.name).join(" - ")}
              </h2>
              <div class={styles.tooltipArea}></div>

              <button
                className={styles.createButton}
                type="submit"
                disabled={!name || !img || !selectedTypes}
                onClick={sendFunction}
              >
                Create
                <div
                  role="tooltip"
                  className={styles.tooltipBox}
                  id="disabledReason"
                >
                  <span className={styles.tooltipItself}>
                    Must add a name and an image to continue.
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className={styles.display}>
          <div className={styles.secondPath}>
            <div className={styles.firstSection}>
              <form className={styles.formText}>
                <label className={styles.textName}>
                  {" "}
                  Give us the new Pokemon's Name
                </label>
                <input
                  className={styles.blankSpace}
                  name="Name"
                  onChange={handleNameChange}
                ></input>
                {errors.name && (
                  <span style={{ color: "red" }}>{errors.name}</span>
                )}
                <br />
                <br />
                <label className={styles.textName}>
                  Put URL of your Pokemon's image
                </label>
                <input
                  className={styles.blankSpace}
                  name="image"
                  onChange={handleImgChange}
                ></input>
              </form>
              <form className={styles.formValues}>
                <h2 className={styles.classTest}>Choose the properties</h2>
                <label className={styles.textRanges}>Life: {life}</label>
                <input
                  type="range"
                  min="1"
                  max="255"
                  value={life}
                  onChange={handleLifeChange}
                />
                <br />
                <label className={styles.textRanges}>Attack: {attack}</label>
                <input
                  type="range"
                  min="1"
                  max="255"
                  value={attack}
                  onChange={handleAttackChange}
                />
                <br />
                <label className={styles.textRanges}>Defense: {defense}</label>
                <input
                  type="range"
                  min="1"
                  max="255"
                  value={defense}
                  onChange={handleDefenseChange}
                />
                <br />
                <label className={styles.textRanges}>Speed: {speed}</label>
                <input
                  type="range"
                  min="1"
                  max="255"
                  value={speed}
                  onChange={handleSpeedChange}
                />
                <br />
                <label className={styles.textRanges}>Height: {height}</label>
                <input
                  type="range"
                  min="1"
                  max="255"
                  value={height}
                  onChange={handleHeightChange}
                />
                <br />
                <label className={styles.textRanges}>Weight: {weight}</label>
                <input
                  type="range"
                  min="1"
                  max="255"
                  value={weight}
                  onChange={handleWeightChange}
                />
                <br />
              </form>
            </div>
          </div>

          <div className={styles.columns}>
            <label className={styles.typeText}>Select types</label>

            {types &&
              types.map((e) => (
                <button
                  className={
                    selectedTypes.find((element) => element === e)
                      ? styles.selected
                      : styles.buttonType
                  }
                  onClick={() => handleType(e)}
                >
                  {e.name}
                </button>
              ))}
          </div>
        </div>
        {done && (
          <div className={styles.darkbck}>
            <div className={styles.doneCard}>
              <h1>Your Pokemon has been created</h1>
              <img
                className={styles.imgCard}
                src="./scizor.gif"
                alt="done Gif"
              ></img>
              <button className={styles.doneButton} onClick={HandleNavigation}>
                Click to go Home
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    postOnDB: (obj) => {
      dispatch(postOnDB(obj));
    },
  };
};

export default connect(null, mapDispatchToProps)(AddPokemon);
