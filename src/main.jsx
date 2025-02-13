import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { pokemonsReducer } from './reducers/pokemons.js'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({ reducer: { pokemon: pokemonsReducer } })
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
