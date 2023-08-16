const { Type } = require("../db");
const URL = "https://pokeapi.co/api/v2/";
const axios = require("axios");

const saveOnDB = async () => {
  try {
    const search = await Type.findAll();

    if (search.length == 0) {
      const { data } = await axios(`${URL}/type`);

      let soloName = data.results.map((e) => e.name);
      for (let name of soloName) {
        await Type.bulkCreate([
          {
            name: name,
          },
        ]);
      }
    }
    return search;
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = { saveOnDB };
