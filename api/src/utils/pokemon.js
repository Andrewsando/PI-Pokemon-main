
 const plantilla = (data) =>{
   return { 
    id: data.id,
    name: data.name,
    image: data.sprites.front_default,
    life: data.stats.find(s => s.stat.name === 'hp').base_stat,
    attack: data.stats.find(s => s.stat.name === 'attack').base_stat,
    defense: data.stats.find(s => s.stat.name === 'defense').base_stat,
    speed: data.stats.find(s => s.stat.name === 'speed').base_stat,
    height: data.height,
    weight: data.weight,
    types: data.types
}
}
module.exports = {plantilla}