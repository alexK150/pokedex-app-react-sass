import React from 'react';
import PokemonCard from "./PokemonCard";

const Pokedex = ({pokemonsArr, exp, isWinner}) => {
    let title;
    if (isWinner) title = <p className='pokedex-winner'>Winner!</p>
    else title = <p className='pokedex-loser'>Loser!</p>

    return (
        <div className='pokedex'>
            {title}
            <h1>Pokedex</h1>
            <div>Experience: {exp}</div>
            <div className='pokedex-cards'></div>
            {pokemonsArr.map(el => {
                return <PokemonCard key={el.id} pokemon={el}/>
            })
            }
        </div>
    );
};

export default Pokedex;
