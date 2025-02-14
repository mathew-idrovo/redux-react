import axios from 'axios'

export const getPokemons = async () => {
  try {
    const { data } = await axios.get(
      'https://pokeapi.co/api/v2/pokemon?limit=151&offset=151'
    )

    return data.results
  } catch (err) {
    console.error('Error obteniendo Pokémon:', err)
    return []
  }
}

export const getPokemonsDetail = (pokemon) => {
  return axios
    .get(pokemon.url)
    .then((res) => res.data)
    .catch((err) => console.log(err))
}
