import React,{useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import { getPokemon,getEvolutions } from "../services";
import Pokedetails from '../components/Pokedetails';

function Details() {
    let pokemonData = useLocation().state;
    const [search,setSearch] = useState('');
    const [pokemon,setPokemon] = useState();
    const [pokemonName,setPokemonName] = useState(pokemonData.name);
    const [evolutionData, setEvolutionData] = useState([]);

 
    const getPokemonDetails = async (name) => {
        let  tempPokemon = await getPokemon(name,true);
        setPokemon(tempPokemon);
      
    }

    const fetchEvolutionData =  async (url) => {
      let data =  await getEvolutions(url);
      setEvolutionData(data);
    };

    const handleChange= (event) => {
      setSearch( event.target.value);
    }

    const handleSubmit = (event) => {
      setPokemonName(search);
      event.preventDefault();
    }
  
    useEffect(()=>{
    getPokemonDetails(pokemonName);
    if(pokemon) fetchEvolutionData(pokemon.evolution);
    },[pokemonName])
    useEffect(()=>{
      if(pokemon) fetchEvolutionData(pokemon.evolution);
      },[pokemon])
  

    
    if(pokemon)
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={search} onChange={handleChange}  />
          <input type="submit" value="Submit" />
        </label>
        
      </form>
        <Pokedetails pokemon={pokemon} evolutionData = {evolutionData}/>
    </div>
  )
}

export default Details