import React,{useEffect, useState} from "react";
import { useLocation,Link } from "react-router-dom";
import { getPokemon,getEvolutions } from "../services";
import Pokedetails from '../components/Pokedetails';
import '../styles/details.css';

function Details() {
    let pokemonData = useLocation().state;
    const [search,setSearch] = useState('');
    const [pokemon,setPokemon] = useState();
    const [pokemonName,setPokemonName] = useState(pokemonData.name);
    const [evolutionData, setEvolutionData] = useState([]);

 
    const getPokemonDetails = async (name) => {
        const  tempPokemon = await getPokemon(name,true);
        setPokemon(tempPokemon);
      
    }

    const fetchEvolutionData =  async (url) => {
      const data =  await getEvolutions(url);
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
    },[pokemonName])
    
    useEffect(()=>{
      if(pokemon) fetchEvolutionData(pokemon.evolution);
      },[pokemon])
  

    
    if(pokemon)
  return (
    <div className="details-page">
      <div className="poke-search">
        <Link className="link" to="/pokelist">
        <button className="front-desc-button">Go back</button>
        </Link>
        
      <form onSubmit={handleSubmit}>
        <label className="front-desc-text search-label">
          Find pokemon by name:
          <input  className="search-bar" type="text" value={search} onChange={handleChange}  />
          <button className="front-desc-button" type="submit" value="submit" >Search</button>
        </label>
        
      </form>
      </div>
        
        <Pokedetails pokemon={pokemon} evolutionData = {evolutionData}/>
    </div>
  )
}

export default Details