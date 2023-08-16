const { Pokemon, Type, pokemon_types } = require("../db");
const URL = "http://pokeapi.co/api/v2/pokemon/";
const axios = require("axios");
const { modelo } = require("../utils/pokemon");
const { postearEnDB } = require("./postearEnDB");

const getAll = async () => {
  try {
    const pokemonsDB = await Pokemon.findAll(
      {order: [
        ['api_id', 'ASC'],
    ],
        include:[Type]}
      );
     
      return [ ...pokemonsDB];
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

const getFromAPI = async() => {
  let { data } = await axios(URL);
  const api = [] ;
  console.log(data.next )
  while (data.next) {
    api.push(...data.results.map(async pokemon => {
      try{
        const { data } = await axios(pokemon.url)
        const mapped = await modelo(data)
        const saved = await postearEnDB(mapped)
        return saved
      } catch(e) {
        console.log(e)
      }
    }))
    
    data = (await axios(data.next)).data
  }
  console.log('no more next')

  try{
    const results = await Promise.all(api)
  //   await Pokemon.bulkCreate(results,{


  //     // include: [Type],
  //     // updateOnDuplicate: [Pokemon.name, Type.name],
  //     // ignoreDuplicates: true,
  //     // returning: false
  // })
  console.log('Pokemons Loaded!')
  } catch(e) {
    console.log(e.sql, e)
  }
}

module.exports = { getAll, getFromAPI };
