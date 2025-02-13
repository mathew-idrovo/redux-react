import { PokemonCard } from './PokemonCard'
import './PokemonList.css'

const PokemonList = ({ pokemons = [] }) => {
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon) => (
        <PokemonCard url={pokemon.url} name={pokemon.name} key={pokemon.name} />
      ))}
    </div>
  )
}

export { PokemonList }
