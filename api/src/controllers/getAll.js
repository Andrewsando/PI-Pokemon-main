const { Pokemon, Type } = require("../db");
const URL = "http://pokeapi.co/api/v2/pokemon/";
const axios = require("axios");
const { modelo } = require("../utils/pokemon");
const { postOnDB } = require("./postOnDB");

const getAll = async () => {
  try {
    const pokemonsDB = await Pokemon.findAll({
      order: [["api_id", "ASC"]],
      include: [Type],
    });

    return [...pokemonsDB];
  } catch (error) {
    throw new Error(error.message);
  }
};

const getFromAPI = async () => {
  let { data } = await axios(URL);
  const api = [];
  while (data.next) {
    api.push(
      ...data.results.map(async (pokemon) => {
        try {
          const { data } = await axios(pokemon.url);
          const mapped = await modelo(data);
          const saved = await postOnDB(mapped);
          return saved;
        } catch (e) {
          console.log(e);
        }
      })
    );

    data = (await axios(data.next)).data;
  }

  try {
    const results = await Promise.all(api);
  } catch (e) {
    error.message;
  }
};

module.exports = { getAll, getFromAPI };
