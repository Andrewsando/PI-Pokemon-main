const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "PokemonTypes",
    {
      PokemonId: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
  
      },
      TypeId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      }
    }
  );
};
