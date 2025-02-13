// api.js
import axios from 'axios'

export const getPokemons = async () => {
  try {
    const { data } = await axios.get(
      'https://pokeapi.co/api/v2/pokemon?limit=151'
    )
    console.log('api', data)
    return data.results
    // ✅ Ya no necesita `types`
  } catch (err) {
    console.error('Error obteniendo Pokémon:', err)
    return []
  }
}
