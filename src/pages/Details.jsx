import React,{useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import { getPokemon } from "../services";
import Pokedetails from '../components/Pokedetails';

function Details() {
    let pokemonData = useLocation().state;

    const [pokemon,setPokemon] = useState();
  
    const getPokemonDetails = async () => {
        let  tempPokemon = await getPokemon(pokemonData.name,true);
        setPokemon(tempPokemon);
      
    }
  
    useEffect(()=>{
    getPokemonDetails();
    })
  
    if(!pokemon){return <h1>Loading</h1> }
  return (
    <div>
        
        <Pokedetails pokemon={pokemon} />
    </div>
  )
}

export default Details