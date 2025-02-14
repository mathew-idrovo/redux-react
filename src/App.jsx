import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logo from './assets/logo.svg'
import './App.css'
import { Button, Col } from 'antd'

import { useEffect } from 'react'
import { PokemonList } from './components/PokemonList'
import { getPokemons, getPokemonsDetail } from './api'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemonsWithDetail, setPokemons } from './actions'

function App() {
  const dispatch = useDispatch()
  const pokemons = useSelector((state) => state.pokemon?.pokemons || [])

  useEffect(() => {
    const fetchPokemons = async () => {
      console.log('🔍 Ejecutando fetchPokemons()...')

      const pkmns = await getPokemons() // ✅ Llamada a la API
      console.log('✅ Pokémon obtenidos:', pkmns)

      dispatch(getPokemonsWithDetail(pkmns)) // ✅ Enviar a Redux Thunk
      console.log('🚀 Dispatch ejecutado con getPokemonsWithDetail')
    }

    fetchPokemons()
  }, [])

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
