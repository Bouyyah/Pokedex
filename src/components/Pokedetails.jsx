import React from "react";
import Pokecard from "./Pokecard";
import Pokevolution from "./Pokevolution";

import "../styles/Pokedetails.css";
import "../styles/Pokecard.css";

function Pokedetails({ pokemon, evolutionData }) {
  let { id, name, image, bio, evolution, stats, training, types } = pokemon;

  return (
    <div className='pokedetails'>
      <div className='pokedetails-container'>
        <div className='pokecard-wrapper'>
          <Pokecard id={id} name={name} image={image} types={types}></Pokecard>
        </div>

        <div>
          <div className='bio-training'>
            <div className='details'>
              <h2 className='title'>Biographie</h2>
              <p className='text' id='bio-text'>
                {bio.description}
              </p>
              <div className='bio-details'>
                <div className='bio-details-row'>
                  <p>Shape :</p>
                  <p>{bio.shape}</p>
                </div>
                <div className='bio-details-row'>
                  <p>Height :</p>
                  <p>{bio.height}</p>
                </div>
                <div className='bio-details-row'>
                  <p>Weight :</p>
                  <p>{bio.weight}</p>
                </div>
                <div className='bio-details-row'>
                  <p>Abilities :</p>
                  <div className='abilities'>
                    {bio.abilities.map((ability, index) => (
                      <p key={index}>{ability.ability.name}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className='details'>
              <h2 className='title'>Training</h2>
              <div className='bio-details-row'>
                <p>Base Exp :</p>
                <p>{training.base_exp}</p>
              </div>
              <div className='bio-details-row'>
                <p>Base happiness :</p>
                <p>{training.base_happiness}</p>
              </div>
              <div className='bio-details-row'>
                <p>Catch rate :</p>
                <p>{training.catch_rate}</p>
              </div>
              <div className='bio-details-row'>
                <p>Growth rate :</p>
                <p>{training.growth_rate}</p>
              </div>
            </div>
          </div>
          <div className='details'>
            <p className='title'>Evolution</p>
            <div className='evolution'>
              <Pokevolution evolutionData={evolutionData} />
            </div>
          </div>
          <div className='details'>
            <p className='title'>Stats</p>
            <div className='stats-container'>
              {Object.entries(stats).map((stat, index) => {
                return (
                  <div className='stat' key={index}>
                    <p>{stat[0]}</p>
                    <p className='stat-num'>{stat[1]}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pokedetails;
