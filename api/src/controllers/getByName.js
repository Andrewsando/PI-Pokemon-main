const { Pokemon } = require("../db");
const URL = "https://pokeapi.co/api/v2/pokemon";
const axios = require("axios");

const getByName = async (name) => {
  try {
    console.log('aqui toy 1');

    const consultaDB = await Pokemon.findOne({
      where: { name: name },
    });
    console.log('sff',consultaDB);

    if (!consultaDB) {
      const { data } = await axios(`${URL}/${name}`);
console.log('aqui toy');
      const character = {
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
        life: data.stats.find(s => s.stat.name === 'hp').base_stat,
        attack: data.stats.find(s => s.stat.name === 'attack').base_stat,
        defense: data.stats.find(s => s.stat.name === 'defense').base_stat,
        speed: data.stats.find(s => s.stat.name === 'speed').base_stat,
        height: data.height,
        weight: data.weight,
      };
      return character;
    }

    return consultaDB;
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = getByName;
