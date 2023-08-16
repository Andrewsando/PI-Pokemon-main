const {  Type } = require("../db");

const getTypes = async () => {
  try {
    const typesDB = await Type.findAll()
      return typesDB;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};



module.exports = { getTypes };
