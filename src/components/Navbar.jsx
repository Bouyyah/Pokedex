import React from 'react';
import '../styles/Navbar.css';
import pokedex from '../ressources/pokedex.png';

function Navbar() {
    return (
        <div className="navbar">
            <img className="pokedex-img" src={pokedex} alt='pokedex'/>
        </div>
    )
}

export default Navbar
