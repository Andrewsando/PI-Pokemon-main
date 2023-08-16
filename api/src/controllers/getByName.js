const { Pokemon, Type } = require("../db");

const getByName = async (name) => {
  try {
    const consultaDB =
      (await Pokemon.findAll({
        where: { name: name },
        include: [Type],
      })) || [];
    return consultaDB;
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = getByName;
