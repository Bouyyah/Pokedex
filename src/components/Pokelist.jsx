import React, { useState, useEffect } from "react";

import Pokecard from "./Pokecard";
import { getAllPokemonsName, getPokemon } from "../services";
import "../styles/Pokelist.css";


const limit = 20;
let offset = 0;

function Pokelist() {
  const [allPokemons, setAllPokemons] = useState([]);
  

  const getPokemons = async () => {
     let pokemons = await Promise.all((await getAllPokemonsName(offset,limit)).map(async name => await getPokemon(name))); 
     setAllPokemons(prev => [...prev, ...pokemons]);
     offset += 20;
  };

  console.log(allPokemons);  
  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div className="pokelist">
      <div className="pokelist-list">
        {allPokemons
          .sort((first, second) => first.id - second.id)
          .map((pokemon, index) => {
            return (
              <Pokecard
                id={pokemon.id}
                name={pokemon.name}
                image={pokemon.image}
                types={pokemon.types}
                key={index}
              ></Pokecard>
            );
          })}
      </div>
      <button className="pokelist-btn" onClick={getPokemons}>
        Load more
      </button>
    </div>
  );
}

export default Pokelist;
