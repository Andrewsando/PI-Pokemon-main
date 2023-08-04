const URL = "https://pokeapi.co/api/v2/pokemon";
const axios = require("axios");
const { Pokemon } = require("../db.js");
const { plantilla } = require("../utils/pokemon.js");

const getById = async (id) => {
  try {
    console.log('lolita');
    const consultaBD = await Pokemon.findOne({
      where: {id: id}});
    console.log(consultaBD);
    if ('lero lole lola',!consultaBD) {
      console.log('url',`${URL}/${id}`)
      const { data } = await axios(`${URL}/${id}`);
      console.log('datitaaa',data);
      const character = plantilla(data)
      console.log('asdkjbads',character);

      return character;

    }
    return consultaBD;
  } catch (e) {
    console.log(e)
    return error.message;
  }
};

module.exports = {getById};
