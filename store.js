import { configureStore } from '@reduxjs/toolkit'
import { pokemonsReducer } from './src/reducers/pokemons'
import { composeWithDevTools } from 'redux-devtools-extension'
import { logger, sortPokemonsMiddleware } from './src/middlewares'
// ✅ Importación correcta

const store = configureStore({
  reducer: {
    pokemon: pokemonsReducer, // ✅ Clave correcta para `useSelector`
  },
  devTools: composeWithDevTools,
  middleware: (getMiddlware) =>
    getMiddlware().concat(sortPokemonsMiddleware, logger),
})

export default store
