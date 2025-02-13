import React from 'react'
import PokemonCard from './PokemonCard'

const PokemonList = ({ pokemons = [] }) => {
  return (
    <div>
      {pokemons.map((pokemon, index) => {
        return <PokemonCard name={pokemon.name || 'Desconocido'} key={index} />
      })}
    </div>
  )
}

PokemonList.defaultProps = {
  pokemons: Array(10).fill(''),
}

export default PokemonList
