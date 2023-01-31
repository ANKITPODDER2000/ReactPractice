import React, { Component } from 'react';
import PokemonCard from './PokemonCard';
import p from './pokemonList';
import './CSS/App.css'

class App extends Component {
    
    render() {
        let Pokemons = p;
        let pokemonList1 = [], pokemonList2 = [];
        let tp1 = 0, tp2 = 0;
        let turn1 = true;
        console.log(Pokemons.length)
        while(Pokemons.length > 0) {
            let ind = Math.floor(Math.random()*100) % Pokemons.length;
            if(turn1) {
                pokemonList1.push(Pokemons[ind]);
                tp1 += Pokemons[ind].base_experience;
            }
            else {
                pokemonList2.push(Pokemons[ind]);
                tp2 += Pokemons[ind].base_experience;
            }
            Pokemons = Pokemons.filter(item => item !== Pokemons[ind])
            turn1 = !turn1;
        }
        return (
            <div className='container'>
                <p className={`group-name ${tp2 > tp1 ? 'loss' : 'win'}`}>{tp2 > tp1 ? 'Lossing Hand' : 'Winning Hand'}</p>
                <p className='exp'>Total Experience : {tp1}</p>
                <div className='card-container'>{pokemonList1.map(pokemon => <PokemonCard pokemon = {pokemon} />)}</div>

                <p className={`group-name ${tp1 > tp2 ? 'loss' : 'win'}`}>{tp1 > tp2 ? 'Lossing Hand' : 'Winning Hand'}</p>
                <p className='exp'>Total Experience : {tp2}</p>
                <div className='card-container'>{pokemonList2.map(pokemon => <PokemonCard pokemon = {pokemon} />)}</div>
            </div>
        )
    }
}

export default App;