const { Pokemon, Type } = require("../db");
const URL = "https://pokeapi.co/api/v2/pokemon";
const axios = require("axios");
const { plantilla } = require("../utils/pokemon");

const getByName = async (name) => {
  try {
    const consultaDB = await Pokemon.findAll({
      where: { name: name },
      include: [Type],
    }) || [];
    return consultaDB;
  } catch (e) {
    console.log(e)
    throw new Error(e.message);
  }
};

module.exports = getByName;
