import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logo from './assets/logo.svg'
import './App.css'
import { Button, Col } from 'antd'

import { useEffect } from 'react'
import { PokemonList } from './components/PokemonList'
import { getPokemons } from './api'
import { useDispatch, useSelector } from 'react-redux'
import { setPokemons } from './actions'

function App() {
  const dispatch = useDispatch()
  const pokemons = useSelector((state) => state.pokemon?.pokemons || []) // ✅ Acceder correctamente a Redux
  console.log('Estado en Redux:', pokemons)

  useEffect(() => {
    async function fetchPokemon() {
      const pkmns = await getPokemons()
      console.log('datos', pkmns)

      dispatch(setPokemons(pkmns || [])) // ✅ Evita errores si `getPokemons` devuelve `undefined`
    }
    fetchPokemon()
  }, [dispatch])

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        {/*<Search />*/}
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  )
}

export default App
