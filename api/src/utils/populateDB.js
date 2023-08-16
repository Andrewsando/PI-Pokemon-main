const { getFromAPI } = require("../controllers/getAll");
const { saveOnDB } = require("../controllers/saveOnDB");
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
        await saveOnDB()
        //Pokemons
        await getFromAPI()
    })
}

module.exports= {
    populateDB
}