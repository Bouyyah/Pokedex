import React from 'react';
import { useLocation } from 'react-router-dom';
import Pokecard from './Pokecard';
import '../styles/Pokedetails.css';
import '../styles/Pokecard.css';

function Pokedetails() {
    const { id, name, image, bio, evolution, stats, training, types } = useLocation().state;


    return (
        <div>
            <Pokecard
                  id={id}
                  name={name}
                  image={image}
                  types={types}
                ></Pokecard>
        </div>
    )
}

export default Pokedetails
