import React from "react";
import { useLocation } from "react-router-dom";
import Pokecard from "./Pokecard";
import "../styles/Pokedetails.css";
import "../styles/Pokecard.css";

function Pokedetails() {
  const {
    id,
    name,
    image,
    bio,
    evolution,
    stats,
    training,
    types,
  } = useLocation().state;

  return (
    <div className="pokedetails">
      <div className="pokedetails-container">
        <div className="pokecard-wrapper">
          <Pokecard id={id} name={name} image={image} types={types}></Pokecard>
        </div>

        <div>
          <div className="bio-training">
            <div className="details">
              <h2 className="title">Biographie</h2>
              <p className="text">{bio.description}</p>
              <div className="bio-details">
                <div className="bio-details-row">
                  <p>Shape :</p>
                  <p>{bio.shape}</p>
                </div>
                <div className="bio-details-row">
                  <p>Height :</p>
                  <p>{bio.height}</p>
                </div>
                <div className="bio-details-row">
                  <p>Weight :</p>
                  <p>{bio.weight}</p>
                </div>
                <div className="bio-details-row">
                  <p>Abilities :</p>
                  <div className="abilities">
                    {bio.abilities.map((ability, index) => (
                      <p key={index}>{ability.ability.name}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="details">
              <h2 className="title">Training</h2>
              <div className="bio-details-row">
                <p>Base Exp :</p>
                <p>{training.base_exp}</p>
              </div>
              <div className="bio-details-row">
                <p>Base happiness :</p>
                <p>{training.base_happiness}</p>
              </div>
              <div className="bio-details-row">
                <p>Catch rate :</p>
                <p>{training.catch_rate}</p>
              </div>
              <div className="bio-details-row">
                <p>Growth rate :</p>
                <p>{training.growth_rate}</p>
              </div>
            </div>
            
          </div>
          <div className="details">
             <p className="title">Evolution</p>
             <div className="evolutions"></div>
            </div>
            <div className="details">

            </div>
        </div>
        
      </div>
    </div>
  );
}

export default Pokedetails;
