import React from 'react';
import {FANCIER_PICS_URL} from "../../constants/api";

const PokemonCard = ({pokemon}) => {
    let numToThree = (num) => `00${num}`.slice(-3)
    let imgSrc = `${FANCIER_PICS_URL}${numToThree(pokemon.id)}.png`

    return (
        <div className='pokemon-card'>
            <h1 className='pokemon-card--title'>{pokemon.name}</h1>
            <div className='pokemon-card--image'>
                <img src={imgSrc} alt=""/>

            </div>
            <div className='pokemon-card--data'>Type: {pokemon.type}</div>
            <div className='pokemon-card--data'>Exp: {pokemon.base_experience}</div>
        </div>
    );
};

export default PokemonCard;
