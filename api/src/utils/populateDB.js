const { getFromAPI } = require("../controllers/getAll");
const { guardarDB } = require("../controllers/guardarDB");
const { Pokemon, Type, PokemonTypes } = require("../db");

populateDB = () => {
    //Validates db is empty
    Type.sync()
    Pokemon.sync().then(async()=>{
        PokemonTypes.sync()
        const amount = await Pokemon.count();
        
        if(amount > 0){
            return
        }
        //Types
        await guardarDB()
        //Pokemons
        await getFromAPI()
    })
}

module.exports= {
    populateDB
}