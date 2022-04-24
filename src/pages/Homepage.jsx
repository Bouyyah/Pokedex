import React from "react";
import { Link } from "react-router-dom";
import Pokecard from "../components/Pokecard";
import "../styles/Homepage.css";

function Homepage() {
  let startersData = [
    {
      id: 1,
      name: "bulbasaur",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      types: ["grass", "poison"],
    },
    {
      id: 4,
      name: "charmander",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      types: ["fire"],
    },
    {
      id: 7,
      name: "squirtle",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      types: ["water"],
    },
  ];

  return (
    <div className="home">
      
      <div className="front">
        <div className="front-desc">
          <p className="front-desc-text">
            <b>The Pokédex</b> is an invaluable tool to Trainers in the Pokémon
            world. It gives information about all Pokémon in the world that are
            contained in its database. This is a list of Pokémon in the order
            dictated by the National Pokédex, meaning that Pokémon from the
            Kanto region will appear first, followed by those from Johto, Hoenn,
            Sinnoh, Unova, Kalos, Alola, Galar, and Hisui. Each region's set of
            Pokémon starts with its own set of starter Pokémon and their
            evolutions, going in order of Grass, Fire, Water; the only exception
            is Unova, which begins with Victini, who is then followed by the
            starter Pokémon.
            
          </p>
          <Link to="/pokelist">
              <button className="front-desc-button">All Pokemons</button>
            </Link>
        </div>
        <div className="front-pokecards">
          {startersData.map((starter, index) => (
            <div className={`homecard-${starter.name} homecard`} key={index}>
              <Pokecard
                id={starter.id}
                name={starter.name}
                image={starter.image}
                types={starter.types}
              ></Pokecard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
