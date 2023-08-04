const { Pokemon } = require("../db");
const URL = "http://pokeapi.co/api/v2/pokemon/";
const axios = require("axios");
const { plantilla } = require("../utils/pokemon");

const getAll = async () => {
  try {
    const pokemonsDB = await Pokemon.findAll();
      const { data } = await axios(URL);

      const pokemonsAPI =await Promise.all( data.results.map(async pokemon => {
        const { data } = await axios(pokemon.url)
        console.log('datita',data);
        return plantilla(data)
      }))
      console.log(pokemonsAPI);
      return [...pokemonsAPI, ...pokemonsDB];
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

module.exports = { getAll };
