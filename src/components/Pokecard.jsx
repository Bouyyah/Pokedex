import React from "react";
import "../styles/Pokecard.css";
import "../styles/Poketypes.css";

function Pokecard({ id, name, image, types }) {
  return (
    <div className='pokecard'>
      <div className={`pokecard-container ${types[0]}-gradient`}>
        <p className='pokecard-id'>
          {id < 10 ? `#00${id}` : id < 100 ? `#0${id}` : id}
        </p>
        <img className='pokecard-img' src={image} alt={name}></img>
        <p className='pokecard-name'>{name}</p>
        <div className='pokecard-types'>
          {types.map((type, index) => (
            <p className={`pokecard-type ${type}`} key={index}>
              {type}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pokecard;
