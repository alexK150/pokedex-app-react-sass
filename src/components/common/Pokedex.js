import React from 'react';
import PokemonCard from "./PokemonCard";

const Pokedex = ({pokemonsArr, exp, isWinner}) => {
    console.log('pokemonsArr', pokemonsArr)
    return (
        <div className='pokedex'>
            <h1>Pokedex</h1>
            <div>Experience: {exp}</div>
            <p>{isWinner ? 'Winner!' : 'Loser!'}</p>
            <div className='pokedex-cards'></div>
            {pokemonsArr.map(el => {
                return <PokemonCard key={el.id} pokemon={el}/>
            })
            }
        </div>
    );
};

export default Pokedex;
