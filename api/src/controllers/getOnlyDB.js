const { Pokemon } = require("../db");

const getOnlyDB = async () => {
  try {
    const pokemonsDB = await Pokemon.findAll();

      return pokemonsDB
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

module.exports = { getOnlyDB };
