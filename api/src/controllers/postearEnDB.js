const { Pokemon, Type, PokemonTypes } = require("../db");

const postearEnDB = async (data) => {
  try {
    // const buscar = await Pokemon.findOne({
    //     where: {name : data.name}})

    //     console.log('busq', buscar);
    //     if(buscar){
    //  throw new Error('It already exist on DB')
    //     }
    console.log("createeee");






    const types = await Type.findAll({where: {id: data.types}})
    const pokemon = await Pokemon.create({
        name: data.name,
        image: data.image,
        life: data.life,
        attack: data.attack,
        defense: data.defense,
        speed: data.speed,
        height: data.height,
        weight: data.weight, 
    },{
      include: [Type]
    });
    await pokemon.addTypes(types)





    return pokemon;
  } catch (e) {
    console.log("este es el error", e);

    throw new Error(e.message);
  }
};

module.exports = { postearEnDB };
