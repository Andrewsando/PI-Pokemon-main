const URL = "https://pokeapi.co/api/v2/pokemon";
const axios = require("axios");
const { Pokemon, Type } = require("../db.js");
const { plantilla } = require("../utils/pokemon.js");

const getById = async (id) => {
  try {
    const isUUID = id.match(
      "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
    );
    if (isUUID) {
      const consultaBD = await Pokemon.findOne({
        where: { id },
        include: [Type],
      });
      if (consultaBD === null) {
        throw new Error("Error");
      }
      return consultaBD;
    } else {
      const { data } = await axios(`${URL}/${id}`);
      const character = plantilla(data);
      return character;
    }
  } catch (e) {
    return error.message;
  }
};

module.exports = { getById };
