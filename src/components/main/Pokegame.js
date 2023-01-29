import React, {useState} from 'react';
import Pokedex from "../common/Pokedex";

const Pokegame = () => {
    const [pokemons, setPokemons] = useState([
        {id: 4,   name: 'Charmander', type: 'fire',     base_experience: 62},
        {id: 7,   name: 'Squirtle',   type: 'water',    base_experience: 63},
        {id: 11,  name: 'Metapod',    type: 'bug',      base_experience: 72},
        {id: 12,  name: 'Butterfree', type: 'flying',   base_experience: 178},
        {id: 25,  name: 'Pikachu',    type: 'electric', base_experience: 112},
        {id: 39,  name: 'Jigglypuff', type: 'normal',   base_experience: 95},
        {id: 94,  name: 'Gengar',     type: 'poison',   base_experience: 225},
        {id: 133, name: 'Eevee',      type: 'normal',   base_experience: 65}
    ])

    let person1 = [];
    let person2 = [ ...pokemons ];

    while (person1.length < person2.length) {
        let randIdx = Math.floor(Math.random() * person2.length);
        let randomPokemon = person2.splice(randIdx, 1)[0];
        person1.push(randomPokemon);
    }

    let pokemonsExperience1 = person1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    let pokemonsExperience2 = person2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

    return (
        <div>
            <Pokedex pokemonsArr={person1} exp={pokemonsExperience1} isWinner={pokemonsExperience1 > pokemonsExperience2}/>
            <Pokedex pokemonsArr={person2} exp={pokemonsExperience2} isWinner={pokemonsExperience2 > pokemonsExperience1}/>
        </div>
    );
};

export default Pokegame;
