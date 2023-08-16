const { Pokemon, Type } = require("../db");

const postOnDB = async (data) => {
  try {
    const types = await Type.findAll({ where: { id: data.types } });
    const pokemon = await Pokemon.create(
      {
        ...(data.api_id ? { api_id: data.api_id } : {}),
        name: data.name,
        image: data.image,
        life: data.life,
        attack: data.attack,
        defense: data.defense,
        speed: data.speed,
        height: data.height,
        weight: data.weight,
      },
      {
        include: [Type],
      }
    );
    await pokemon.addTypes(types);

    return pokemon;
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = { postOnDB };
