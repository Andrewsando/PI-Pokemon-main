const URL = "http://pokeapi.co/api/v2/pokemon/";
const axios = require("axios");
const { plantilla } = require("../utils/pokemon");

const getOnAPI = async () => {
  try {
      const { data } = await axios(URL);

      const pokemonsAPI =await Promise.all( data.results.map(async pokemon => {
        const { data } = await axios(pokemon.url)
        return plantilla(data)
      }))
      return [...pokemonsAPI];
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

module.exports = { getOnAPI };
