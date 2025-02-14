import { configureStore } from '@reduxjs/toolkit'
import { pokemonsReducer } from './src/reducers/pokemons'
import { composeWithDevTools } from 'redux-devtools-extension'
import { logger, sortPokemonsMiddleware } from './src/middlewares'
import { thunk } from 'redux-thunk'
// ✅ Importación correcta

const store = configureStore({
  reducer: {
    pokemon: pokemonsReducer, // ✅ Clave correcta para `useSelector`
  },
  middleware: (getMiddlware) =>
    getMiddlware().concat(thunk, sortPokemonsMiddleware, logger),
})

export default store
