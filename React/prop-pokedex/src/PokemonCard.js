import React, { Component } from 'react'
import './CSS/PokemonCard.css'

class PokemonCard extends Component {
    render() {
        return (
        <div className='card'>
            <div className='card-image'>
                <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${('00'+this.props.pokemon.id).slice(-3)}.png`} />
            </div>
            <p className='pokemon-name'>{this.props.pokemon.name}</p>
            <p>Type : {this.props.pokemon.type}</p>
            <p>Exp : {this.props.pokemon.base_experience}</p>
        </div>
        )
  }
}

export default PokemonCard;