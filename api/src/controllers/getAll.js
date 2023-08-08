const { Pokemon, Type, pokemon_types } = require("../db");
const URL = "http://pokeapi.co/api/v2/pokemon/";
const axios = require("axios");
const { plantilla, modelo } = require("../utils/pokemon");

const getAll = async () => {
  try {
    const pokemonsDB = await Pokemon.findAll(
      //{include:[Type]}
      );
     
      return [ ...pokemonsDB];
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

const getFromAPI = async() => {
  let { data } = await axios(URL);
  const api = [] 
  console.log(data.next)
  while (data.next) {
    api.push(...data.results.map(async pokemon => {
      try{
        const { data } = await axios(pokemon.url)
        return modelo(data)
      } catch(e) {
        console.log(e)
      }
    }))
    
    data = (await axios(data.next)).data
  }
  console.log('no more next')

  try{
    const results = await Promise.all(api)
    console.log('result', results.length);
    await Pokemon.bulkCreate(results,{
      include: [Type],
      updateOnDuplicate: [Type],
      returning: false
  })
  console.log('Pokemons Loaded!')
  } catch(e) {
    console.log(e)
  }
}

module.exports = { getAll, getFromAPI };
