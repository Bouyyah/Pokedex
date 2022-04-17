import React, { useState, useEffect } from "react";
import axios from "axios";

import Pokecard from "./Pokecard";
import "../styles/Pokelist.css";

function Pokelist() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [pokeUrl, setPokeUrl] = useState("https://pokeapi.co/api/v2/pokemon/");

  const getPokemons = async () => {
    await axios.get(pokeUrl).then((response) => {
      response.data.results.map(async (pokemon) => {
        await axios
          .get(pokemon.url)
          .then((res) =>
           setAllPokemons(  (currentList) =>  [...currentList, res.data])
          );
      });

      setPokeUrl(response.data.next);
    });
  };

  useEffect(() => {
    getPokemons();
    
  }, []);

  return (
    <div className="pokelist">
      <div className="pokelist-list">
        { allPokemons.sort((first, second) => first.id - second.id).map( (pokemon, index) => {
           return  (
            <Pokecard
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.other.dream_world.front_default}
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
