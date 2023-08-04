import axios from "axios";
import Slider from "./Slider";
import { useEffect, useState } from "react";

const AddPokemon = () => {
  const [types, setTypes] = useState([]);
  useEffect(() => {
		const updateTypes = async ()=> {
			const { data } = await axios("https://pokeapi.co/api/v2/type");
			setTypes(data.results);
		}
		updateTypes()
  }, []);

  return (
    <div>
			<h1>Let's create your own Pokemon!!</h1>
			<h2>Please complete the requested information</h2>
      <form>
        <label>Name</label>
        <input name="Name"></input>
        <label>Image</label>
        <input name="Name"></input>

        <label>Life</label>
        <Slider />
        <label>Attack</label>
        <Slider />

        <label>Defense</label>
        <Slider />

        <label>Speed</label>
        <Slider />

        <label>Height</label>
        <Slider />

        <label>Weight</label>
        <Slider />

        <label>Select types</label>

        {types && types.map((e) => (
          <button>{e.name}</button>
        ))}
      </form>
    </div>
  );
};

export default AddPokemon;
