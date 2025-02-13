import { configureStore } from '@reduxjs/toolkit'
import { pokemonsReducer } from './src/reducers/pokemons'
// ✅ Importación correcta

const store = configureStore({
  reducer: {
    pokemon: pokemonsReducer, // ✅ Clave correcta para `useSelector`
  },
})

export default store
