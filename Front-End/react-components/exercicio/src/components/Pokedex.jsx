import React, { Component } from 'react';
import pokemons from '../data';
import Pokemon from './Pokemon';

export default class Pokedex extends Component {

  render() {
    return (
      <div className="pokemon-container">
        {
          pokemons.map((e) => {
            const { id, name, type, averageWeight: { value,  measurementUnit}, image } = e;
            
            return <Pokemon key={id} id={id} name={name} type={type} weight={value} measureUnit={measurementUnit} image={image} />;
          })
        }
      </div>
    );
  }
}

