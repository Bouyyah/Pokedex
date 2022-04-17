import React from 'react';
import '../styles/Pokecard.css';
import '../styles/Poketypes.css';

function Pokecard({id,name,image,types}) {
    return (
        <div className='pokecard'>
            <div className={`pokecard-container ${types[0].type.name}-gradient`}>
            <p className='pokecard-id'>#{id}</p>
            <img className='pokecard-img' src={image} alt={name}></img>
            <h2 className='pokecard-name'>{name}</h2>
            <div className='pokecard-types'>
            {
                types.map((type, index) => <p className={`pokecard-type ${type.type.name}`} key={index}>{type.type.name}</p>)
            }
            </div>
            
        </div>
        </div>
        
    )
}

export default Pokecard
