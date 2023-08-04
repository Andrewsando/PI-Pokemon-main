import { useState } from "react"
import axios from "axios"


export default function SearchBar (){
const [name, setName] = useState('')
const [pokemons, setPokemons] = useState([]);

const handleChange = (event) =>{
    setName(event.target.value)
}

async function onSearchName(name){
    try{
        console.log('que pasa');
      const {data} = await axios(
        `http://localhost:3001/pokemons?name=${name}`
      );
        console.log('datota', data);
      if(data.name){
        setPokemons((oldPokemons)=> [...oldPokemons, data])
      }}
      catch (error) {
        alert("¡There are no pokemons with that name, you must have to enter full name, please verify!")
      }
    }

    return (
    <div>
        <input type = "search" placeholder = "Búsqueda" onChange = {handleChange} value = {name}></input>
        <button onClick={() => {onSearchName(name); setName('')}}> Agregar </button>
        
    </div>
    )
}