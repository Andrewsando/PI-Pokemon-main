const { Type } = require("../db");
const URL = "https://pokeapi.co/api/v2/";
const axios = require("axios");

const guardarDB = async () => {
  try {
    const busqueda = await Type.findAll()

    if(busqueda.length == 0){
    const {data} = await axios(`${URL}/type`)
    console.log('data',data);

    let soloName = data.results.map(e=>e.name)
        for(let name of soloName){

    const ingresoDatos = await Type.bulkCreate([{
      name: name}])
    console.log('intento',ingresoDatos);
    }
    console.log('Ok info saved');;
  } 
  return busqueda
  }catch (e) {
    console.log(e)
    throw new Error(e .message);
};
}

module.exports = {guardarDB}
