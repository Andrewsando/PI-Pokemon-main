const { Pokemon } = require("../db");
const URL = "https://pokeapi.co/api/v2/pokemon";
const axios = require("axios");
const { plantilla } = require("../utils/pokemon");

const getByName = async (name) => {
  try {
    const consultaDB = await Pokemon.findOne({
      where: { name: name },
    }) || [];
      const { data } = await axios(`${URL}/${name}`);
      const character = plantilla(data)

    return [...consultaDB, character];
  } catch (e) {
    console.log(e)
    throw new Error(e.message);
  }
};

module.exports = getByName;
