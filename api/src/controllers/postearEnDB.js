const { Pokemon } = require("../db");

const postearEnDB = async (data) => {
 
    try {
const buscar = await Pokemon.findOne({
    where: {id : data.id}})

    if(buscar){
 throw new Error('It already exist on DB')
    }

    const create = await Pokemon.findOrCreate({
      where: {
        id: data.id,
        name: data.name,
        image: data.image,
        life: data.life,
        attack: data.attack,
        defense: data.defense ,
        speed: data.speed,
        height: data.height,
        weight: data.weight,
      },
    });

    return create;
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = {postearEnDB}